"use client"

import dynamic from "next/dynamic"
import { Container, Title, Card } from "@mantine/core"
import styles from "./test.module.css"
import { useState, useMemo } from "react"
import { Start } from "./_components"
import Image from "next/image"

const Quiz = dynamic(
  () => import("./_components").then((modules) => modules.Quiz),
  { ssr: false }
)

const End = dynamic(() =>
  import("./_components").then((modules) => modules.End)
)

enum SECTIONS {
  "START",
  "QUIZ",
}

export default function TestPage() {
  const [activeSectionName, setActiveSectionName] = useState<SECTIONS>(
    SECTIONS.START
  )
  const startQuiz = () => {
    if (activeSectionName !== SECTIONS.START) return

    setActiveSectionName((prev) => prev + 1)
  }

  const activeSection = useMemo(() => {
    if (activeSectionName === SECTIONS.START)
      return <Start startQuiz={startQuiz} />

    if (activeSectionName === SECTIONS.QUIZ) return <Quiz />
  }, [activeSectionName])

  return (
    <div className={styles.container}>
      <Image
        fill
        src="/image/test-bg.png"
        alt="Background image"
        objectFit="cover"
        objectPosition="center"
      />
      <Container size="xl">{activeSection}</Container>
    </div>
  )
}
