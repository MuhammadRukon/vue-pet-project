import { BASE_URL } from '@/constants'
import axios from 'axios'

export const axiosClient = axios.create({
  baseURL: BASE_URL,
  timeout: 10000, // 10s
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
})

axiosClient.interceptors.request.use((config) => {
  if (config.private) {
    const token = cookieStore.get('token')

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    } else {
      return Promise.reject(new Error('Unauthorized: No token in cookie'))
    }
  }

  return config
})
