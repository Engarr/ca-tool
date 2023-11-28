import { Button, Flex, Stack, Title } from "@mantine/core"
import { memo } from "react"
import styles from "./question-section.module.css"
import { ActiveQuestion } from "@/types/quiz"

interface QuestionSectionProps {
  activeQuestionIndex: number
  questionsCount: number
  activeQuestion: ActiveQuestion
  nextQuestion: (answer: string) => void
}

export const QuestionSection = memo(function Body({
  activeQuestionIndex,
  questionsCount,
  activeQuestion,
  nextQuestion,
}: QuestionSectionProps) {
  return (
    <>
      <Title order={3} ta="center">
        Pytanie {activeQuestionIndex + 1}/{questionsCount}
      </Title>
      <Flex gap="3rem" align="center" direction="column" w="100%">
        <Title order={1} ta="center">
          {activeQuestion.question}
        </Title>
        <Stack className={styles.btnStack}>
          {activeQuestion.answers.map((answer) => {
            return (
              <Button
                variant="filled"
                size="lg"
                key={crypto.randomUUID()}
                onClick={() => nextQuestion(answer)}
              >
                {answer}
              </Button>
            )
          })}
        </Stack>
      </Flex>
    </>
  )
})
