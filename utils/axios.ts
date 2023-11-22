import axios from "axios"
export const axiosClient = axios.create({
  baseURL: "http://localhost:5276/",
  timeout: 8000,
  headers: {
    Accept: "application/json",
  },
})
