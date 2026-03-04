import type { Error } from '@/interfaces'
import type { Register } from '@/interfaces/auth'
import { register } from '@/services/auth.service'
import { useMutation } from '@tanstack/vue-query'

export function useRegisterMutation() {
  return useMutation({
    mutationFn: (payload: Register) => register(payload),
    onSuccess: () => alert('success. implement toast later'),
    onError: (error: Error) => console.error('error occured on register', error.data.detail),
  })
}
