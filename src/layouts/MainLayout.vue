<script setup lang="ts">
import TheContainer from '@/components/layout/TheContainer.vue'
import TheFooter from '@/components/layout/TheFooter.vue'
import TheHeader from '@/components/layout/TheHeader.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <!-- self container component; in this component, this is just simple component composition -->
  <TheHeader />
  <main class="w-full h-[calc(100vh-96px)] text-sm">
    <!-- default / anonymous slot -->
    <TheContainer class="py-4">
      <RouterView />
    </TheContainer>
  </main>

  <TheFooter>
    <!-- named slot -->
    <template #footer>
      <span>Being developed by Rukon. {{ new Date().getFullYear() }}</span></template
    >
  </TheFooter>
</template>

<style scoped></style>
