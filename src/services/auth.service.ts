import { axiosClient } from '@/api'
import type { Login, LoginResponse, Register } from '@/interfaces/auth'

export async function register(payload: Register) {
  const { data } = await axiosClient.post('/auth/register', payload)
  return data
}

export async function login(payload: Login): Promise<LoginResponse> {
  const { data } = await axiosClient.post('/auth/login', payload)
  return data
}
