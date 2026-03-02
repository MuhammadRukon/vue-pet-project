<script setup lang="ts">
import { RouterLink } from 'vue-router'

const navItems = [
  { id: 1, name: 'Home', href: '/' },
  { id: 2, name: 'About', href: '/about' },
]
</script>

<!--  (#default="{ isExactActive }") scoped slot -->

<template>
  <nav class="">
    <RouterLink
      v-for="item in navItems"
      :key="item.id"
      :to="item.href"
      class="px-4"
      #default="{ isExactActive }"
    >
      <span :class="isExactActive ? 'font-bold' : 'font-normal'">{{ item.name }}</span>
    </RouterLink>
  </nav>
</template>

<style scoped></style>
