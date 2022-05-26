import http from "./axios"

export const signupUser = async (userData) => {
    return http.post("/register", userData)
}