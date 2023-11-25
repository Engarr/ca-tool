"use client";

import { Button, PasswordInput, TextInput } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { loginSchema } from "../_validation/login-form";

export const AuthForm: React.FC = () => {
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },

    validate: zodResolver(loginSchema),
  });

  const onSubmit = form.onSubmit((values) => {
    console.log(values);
  });

  return (
    <form onSubmit={onSubmit}>
      <TextInput
        label="Email address"
        placeholder="hello@gmail.com"
        size="md"
        {...form.getInputProps("email")}
      />
      <PasswordInput
        label="Password"
        placeholder="Your password"
        mt="md"
        size="md"
        {...form.getInputProps("password")}
      />

      <Button fullWidth mt="xl" size="md" type="submit">
        Login
      </Button>
    </form>
  );
};
