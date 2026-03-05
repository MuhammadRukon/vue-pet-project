import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { LoginResponse } from '@/interfaces/auth'

export const useAuthStore = defineStore('auth', () => {
  const auth = ref<LoginResponse | null>(null)
  const access_token = computed(() => auth.value?.access_token ?? null)
  const user = computed(() => auth.value?.user ?? null)

  function setAuth(payload: LoginResponse) {
    auth.value = payload
  }

  function clearAuth() {
    auth.value = null
  }

  return { user, access_token, auth, setAuth, clearAuth }
})
