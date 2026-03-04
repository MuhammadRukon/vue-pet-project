import { axiosClient } from '@/api'
import type { Register } from '@/interfaces/auth'

export async function register(payload: Register) {
  const { data } = await axiosClient.post('/auth/register', payload)
  return data
}
