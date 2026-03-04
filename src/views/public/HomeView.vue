<script setup lang="ts">
import { useCitiesQuery } from '@/composables/useCities'
import { toRaw, watch } from 'vue'

const { data: cities, isLoading } = useCitiesQuery()
const stores = [
  { id: 1, name: 'Techland' },
  { id: 2, name: 'Star-Tech' },
  { id: 3, name: 'Ryans' },
]

watch(cities, (newVal) => {
  console.log('Cities Array:', toRaw(newVal))
})
</script>

<template>
  <p v-if="isLoading">Loading...</p>
  <div v-else class="flex gap-4">
    <select
      class="w-1/2 px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
    >
      <option disabled selected>Select City</option>
      <option v-for="city in cities" :key="city.id" :value="city.id">
        {{ city.name }}
      </option>
    </select>

    <select
      class="w-1/2 px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
    >
      <option disabled selected>Select Stores</option>
      <option v-for="store in stores" :key="store.id" :value="store.id">
        {{ store.name }}
      </option>
    </select>
  </div>
</template>

<style scoped></style>
