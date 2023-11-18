"use client"

import { shuffleArray } from "@/utils/shuffle-array"
import { redirect, useSearchParams } from "next/navigation"
import { useMemo, useEffect, useState } from "react"
import { Stack, Progress, Flex, Title, Button, Text } from "@mantine/core"
import styles from "./quiz.module.css"
import { useCountdown } from "usehooks-ts"
import { modals } from "@mantine/modals"

const COUNT_DOWN_INTERVAL = 3 // approximately 30s
const questionsHardCoded = [
  {
    question: "1+1",
    correctAnswer: "2",
    answers: ["3", "4", "5"],
  },
  {
    question: "1+2",
    correctAnswer: "2",
    answers: ["3", "4", "5"],
  },
  {
    question: "1+3",
    correctAnswer: "2",
    answers: ["3", "4", "5"],
  },
  {
    question: "1+4",
    correctAnswer: "2",
    answers: ["3", "4", "5"],
  },
]
export const Quiz: React.FC = () => {
  //   const params = useSearchParams()
  //   const userId = params.get("id")
  //   const specializationId = params.get("specialization_Id")

  //   if (!userId || !specializationId) {
  //     redirect("/")
  //   }

  const [questions, setQuestions] = useState(questionsHardCoded)
  const [userCorrectAnswers, setUserCorrectAnswers] = useState<number>(0)

  const addPoint = () => setUserCorrectAnswers((prev) => prev + 1)
  const [activeQuestionIndex, setActiveQuestionIndex] = useState<number>(0)

  const [count, { startCountdown, resetCountdown }] = useCountdown({
    countStart: 10000,
    intervalMs: COUNT_DOWN_INTERVAL,
  })

  useEffect(() => {
    if (count === 0) nextQuestion("")
  }, [count])

  const activeQuestion = useMemo(() => {
    resetCountdown()
    startCountdown()
    const { question, correctAnswer, answers } = questions[activeQuestionIndex]
    const shuffledAnswers = shuffleArray([correctAnswer, ...answers])

    return {
      question,
      answers: shuffledAnswers,
    }
  }, [questions, activeQuestionIndex])

  const nextQuestion = (userAnswer: string) => {
    if (userAnswer === questions[activeQuestionIndex].correctAnswer) addPoint

    if (activeQuestionIndex === questions.length - 1) {
      modals.openConfirmModal({
        title: "Dziękujemy za ukończenie testu.",
        children: (
          <Stack align="center">
            <Title order={3}>
              Otrzymałeś rangę <strong>CZELADNIK</strong>
            </Title>

            <Text size="lg">
              Twój wynik to{" "}
              {(userCorrectAnswers / questions.length).toFixed(0).concat("%")} (
              {userCorrectAnswers}/{questions.length})
            </Text>
            <Text size="md">Odezwiemy się do Ciebie w najbliższym czasie</Text>
          </Stack>
        ),
      })
      return
    }

    setActiveQuestionIndex((prev) => prev + 1)
  }

  return (
    <Flex
      gap="5rem"
      align="center"
      direction="column"
      className={styles.container}
    >
      <Progress
        value={count / 100}
        size={"xl"}
        className={styles.progress}
        radius="0"
        animated
      />
      <Title order={3} className={styles.questionNumber}>
        Pytanie {activeQuestionIndex + 1}/{questions.length}
      </Title>
      <Flex gap="3rem" align="center" direction="column" w="100%">
        <Title order={1}>{activeQuestion.question}</Title>
        <Stack className={styles.btnStack}>
          {activeQuestion.answers.map((answer) => (
            <Button
              variant="filled"
              size="lg"
              key={answer}
              onClick={() => nextQuestion(answer)}
            >
              {answer}
            </Button>
          ))}
        </Stack>
      </Flex>
    </Flex>
  )
}
