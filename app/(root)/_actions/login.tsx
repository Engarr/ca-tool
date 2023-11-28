import { axiosClient } from "@/utils/axios"
import { LoginSchema } from "../_validation/login-form"

export const login = async (values: LoginSchema) => {
  const req = await axiosClient.post("/auth/login", values)
  return req.data
}
