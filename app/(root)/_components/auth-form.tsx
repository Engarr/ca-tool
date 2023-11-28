"use client"

import { Button, PasswordInput, TextInput } from "@mantine/core"
import { useForm, zodResolver } from "@mantine/form"
import { LoginSchema, loginSchema } from "../_validation/login-form"
import { useMutation } from "@tanstack/react-query"
import { login } from "../_actions/login"

export const AuthForm: React.FC = () => {
  const loginMutation = useMutation({
    mutationKey: ["login"],
    mutationFn: (values: LoginSchema) => login(values),
  })

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },

    validate: zodResolver(loginSchema),
  })

  const onSubmit = form.onSubmit((values) => {
    console.log(values)
  })

  return (
    <form onSubmit={onSubmit}>
      <TextInput
        label="Email"
        placeholder="Podaj adres email"
        size="md"
        {...form.getInputProps("email")}
      />
      <PasswordInput
        label="Hasło"
        placeholder="Podaj hasło"
        mt="md"
        size="md"
        {...form.getInputProps("password")}
      />

      <Button fullWidth mt="xl" size="md" type="submit">
        Zaloguj się
      </Button>
    </form>
  )
}
