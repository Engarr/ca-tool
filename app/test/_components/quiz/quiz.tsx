"use client"

import { shuffleArray } from "@/utils/shuffle-array"
import { redirect, useSearchParams } from "next/navigation"
import { useMemo, useEffect, useState } from "react"
import { Stack, Progress, Flex, Title, Button } from "@mantine/core"
import { SectionProps } from "../../page"
import styles from "./quiz.module.css"
import { useCountdown } from "usehooks-ts"

interface QuizProps extends SectionProps {
  questions: {
    question: string
    correctAnswer: string
    answers: string[]
  }[]
  addPoint: () => void
}

const COUNT_DOWN_INTERVAL = 3 // approximately 30s

export const Quiz: React.FC<QuizProps> = ({
  nextSection,
  questions,
  addPoint,
}) => {
  //   const params = useSearchParams()
  //   const userId = params.get("id")
  //   const specializationId = params.get("specialization_Id")

  //   if (!userId || !specializationId) {
  //     redirect("/")
  //   }

  const [activeQuestionIndex, setActiveQuestionIndex] = useState<number>(0)

  const [count, { startCountdown, stopCountdown, resetCountdown }] =
    useCountdown({
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
      nextSection()
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
      <Flex gap="md" align="center" direction="column" w="100%">
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
