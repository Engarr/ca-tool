import { Stack, Title, Text, Center } from "@mantine/core"

interface EndProps {
  questionsCount: number
  correctUserAnswersCount: number
}

export const End: React.FC<EndProps> = ({
  correctUserAnswersCount,
  questionsCount,
}) => {
  const percentResult = (correctUserAnswersCount / questionsCount)
    .toFixed(0)
    .concat("%")

  return (
    <Center mih={"60vh"}>
      <Stack align="center">
        <Title order={1}>Dziękujemy za ukończenie testu.</Title>
        <Title order={3}>
          Otrzymałeś rangę <strong>CZELADNIK</strong>
        </Title>

        <Text size="lg">
          Twój wynik to {percentResult} ({correctUserAnswersCount}/
          {questionsCount})
        </Text>
        <Text size="md">Odezwiemy się do Ciebie w najbliższym czasie</Text>
      </Stack>
    </Center>
  )
}
