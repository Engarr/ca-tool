import * as z from "zod";

export const loginSchema = z.object({
  email: z.string().email({
    message: "Nieprawidłowy email",
  }),
  password: z.string().min(7, {
    message: "Hasło musi zawierać minimum 7 znaków",
  }),
});

export type LoginSchema = z.infer<typeof loginSchema>;
