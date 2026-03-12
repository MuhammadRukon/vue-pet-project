<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import router from '@/router/index'

const authStore = useAuthStore()

const navItems = [
  { id: 1, name: 'Home', href: '/' },
  { id: 2, name: 'Admin Panel', href: '/admin' },
  { id: 3, name: 'About', href: '/about' },
]

const handleLogout = async () => {
  const currentRoute = router.currentRoute.value

  await authStore.clearAuth()

  if (currentRoute.meta.private) {
    router.push({ name: 'login' })
  }
}
</script>

<!--  (#default="{ isExactActive }") scoped slot -->

<template>
  <nav class="flex justify-between">
    <div>
      <RouterLink
        v-for="item in navItems"
        :key="item.id"
        :to="item.href"
        class="px-4"
        #default="{ isExactActive }"
      >
        <span :class="isExactActive ? 'font-bold' : 'font-normal'">{{ item.name }}</span>
      </RouterLink>
    </div>

    <div>
      <button class="cursor-pointer" v-if="authStore.auth?.user" @click="handleLogout">
        Logout
      </button>
      <RouterLink v-else to="/login">Login</RouterLink>
    </div>
  </nav>
</template>

<style scoped></style>
