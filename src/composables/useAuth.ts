// import type { Error } from '@/interfaces'
import type { Login, Register } from '@/interfaces/auth'
import { login, register } from '@/services/auth.service'
import { useAuthStore } from '@/stores/auth'
import { useMutation } from '@tanstack/vue-query'
import { useRouter } from 'vue-router'

export function useRegisterMutation() {
  return useMutation({
    mutationFn: (payload: Register) => register(payload),
    onSuccess: () => alert('success. implement toast later'),
    // onError: (error: Error) => console.error('error occured on register', error.data.detail),
  })
}

export function useLoginMutation() {
  const authStore = useAuthStore()
  const router = useRouter()

  return useMutation({
    mutationFn: (payload: Login) => login(payload),
    onSuccess: (response) => {
      authStore.setAuth(response)
      router.push({ name: 'admin' })
    },
    // onError: (error: Error) => console.error('error occured on register', error.data.detail),
  })
}
