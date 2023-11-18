import { Stack, Title, Text, Center, Button } from "@mantine/core"

export interface StartProps {
  startQuiz: () => void
}

export const Start: React.FC<StartProps> = ({ startQuiz }) => {
  return (
    <Center mih={"60vh"}>
      <Stack align="center">
        <Title order={1}>Krótki Quiz</Title>
        <Title order={3}>
          Rozwiąż krótki test dotyczący wybranej przez Ciebie specjalizacji.
        </Title>

        <Button size="lg" onClick={startQuiz}>
          Rozpocznij quiz
        </Button>
      </Stack>
    </Center>
  )
}
