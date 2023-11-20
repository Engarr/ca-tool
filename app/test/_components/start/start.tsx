import { Paper, Stack, Title, Text, Center, Button } from "@mantine/core"

export interface StartProps {
  startQuiz: () => void
}

export const Start: React.FC<StartProps> = ({ startQuiz }) => {
  return (
    <Center mih={"60vh"} mah={"100vh"}>
      <Paper withBorder px={"2rem"} py={"1.5rem"} radius={"lg"}>
        <Stack align="center" gap="lg">
          <Title order={1}>Krótki test</Title>
          <Text size="lg" ta="center">
            Rozwiąż krótki test dotyczący Twojej specjalizacji.
          </Text>

          <Button size="lg" onClick={startQuiz}>
            Rozpocznij quiz
          </Button>
        </Stack>
      </Paper>
    </Center>
  )
}
