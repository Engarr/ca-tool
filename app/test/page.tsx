"use client"

import dynamic from "next/dynamic"
import styles from "./test.module.css"

import { useState, useMemo } from "react"
import { redirect, useSearchParams } from "next/navigation"
import Image from "next/image"

import { Container } from "@mantine/core"
import { Start } from "./_components"

const Quiz = dynamic(
  () => import("./_components").then((modules) => modules.Quiz),
  { ssr: false }
)

enum SECTIONS {
  "START",
  "QUIZ",
}

export default function TestPage() {
  const params = useSearchParams()
  const userId = params.get("userId")
  const testId = params.get("testId")

  if (!userId || !testId) {
    redirect("/")
  }

  const [activeSectionName, setActiveSectionName] = useState<SECTIONS>(
    SECTIONS.START
  )

  const activeSection = useMemo(() => {
    const startQuiz = () => {
      if (activeSectionName !== SECTIONS.START) return

      setActiveSectionName((prev) => prev + 1)
    }

    if (activeSectionName === SECTIONS.START)
      return <Start startQuiz={startQuiz} />

    if (activeSectionName === SECTIONS.QUIZ) return <Quiz />
  }, [activeSectionName])

  return (
    <div className={styles.container}>
      <Image
        fill
        src="/image/test-bg-2.svg"
        alt="Background image"
        objectFit="cover"
      />
      <Container size="xl">{activeSection}</Container>
    </div>
  )
}
