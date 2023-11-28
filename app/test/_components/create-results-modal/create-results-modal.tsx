import { modals } from "@mantine/modals"
import { Badge, Stack, Title, Text, Center } from "@mantine/core"
import { redirect } from "next/navigation"

export const createResultsModal = (
  questionsCount: number,
  userCorrectAnswers: number
) => {
  const percentResult = ((userCorrectAnswers / questionsCount) * 100)
    .toFixed(0)
    .concat("%")
  return modals.open({
    size: "lg",
    children: (
      <Center px={"2rem"}>
        <Stack align="center" gap="lg">
          <Title order={2}>Gratulacje! Otrzymujesz rangę:</Title>

          <Badge color="dark" size="xl">
            CZELADNIK
          </Badge>

          <Text size="lg">Twój wynik to {percentResult}</Text>

          <Badge variant="dot" size="lg">
            ({userCorrectAnswers}/{questionsCount})
          </Badge>

          <Text size="md">Odezwiemy się do Ciebie w najbliższym czasie</Text>
        </Stack>
      </Center>
    ),
    onClose: () => redirect("/"),
  })
}
