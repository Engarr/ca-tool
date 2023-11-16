"use client"

import dynamic from "next/dynamic"
import { Container, Title, Card } from "@mantine/core"
import styles from "./test.module.css"
import { useState } from "react"
import { Start } from "./_components"

const Quiz = dynamic(
  () => import("./_components").then((modules) => modules.Quiz),
  { ssr: false }
)

const End = dynamic(
  () => import("./_components").then((modules) => modules.End),
  { ssr: false }
)

enum SECTIONS {
  "START",
  "QUIZ",
  "END",
}

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

export interface SectionProps {
  nextSection: () => void
}

export default function TestPage() {
  const [activeSectionName, setActiveSectionName] = useState<SECTIONS>(
    SECTIONS.QUIZ
  )

  const [questions, setQuestions] = useState(questionsHardCoded)
  const [userCorrectAnswers, setUserCorrectAnswers] = useState<number>(0)

  const addPoint = () => setUserCorrectAnswers((prev) => prev + 1)

  const nextSection = () => {
    if (activeSectionName === SECTIONS.END) return

    setActiveSectionName((prev) => prev + 1)
  }

  const getActiveSection = (sectionName: SECTIONS) => {
    if (sectionName === SECTIONS.START)
      return <Start nextSection={nextSection} />

    if (sectionName === SECTIONS.QUIZ)
      return (
        <Quiz
          nextSection={nextSection}
          addPoint={addPoint}
          questions={questions}
        />
      )

    if (sectionName === SECTIONS.END) return <End />
  }

  const activeSection = getActiveSection(activeSectionName)

  return (
    <div className={styles.container}>
      <Container size="xl">{activeSection}</Container>
    </div>
  )
}
