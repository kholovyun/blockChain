import axios, { InternalAxiosRequestConfig } from "axios";

export const instance = axios.create({
    baseURL : 'https://testeryu-674d1fcf6f86.herokuapp.com'
})


instance.interceptors.request.use((req: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem('token')
    if (token) {
        req.headers.Authorization = token
    }
    return req
})
