import { Stack, Center, Loader, Title } from "@mantine/core"

export const Loading: React.FC = () => {
  return (
    <Center>
      <Stack gap="md">
        <Loader size="xl" />
        <Title order={2}>Loading...</Title>
      </Stack>
    </Center>
  )
}
