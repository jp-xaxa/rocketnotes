import axios from "axios"

export const api = axios.create({
  baseURL: "https://rocketnotes-api-q5o9.onrender.com",
})
