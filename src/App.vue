<template>
  <main class="w-full h-[calc(100vh-40px)]">
    <Main />
  </main>

  <footer class="bg-black text-white text-center py-2">
    <span>Being developed by Rukon. {{ new Date().getFullYear() }}</span>
  </footer>
</template>

<script setup lang="ts">
import Main from './components/Main.vue'
</script>
