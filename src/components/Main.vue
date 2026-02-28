<template>
  <main>
    <select
      v-model="selectedOption"
      class="min-w-20 border border-gray-600 p-2 rounded-lg focus:outline-none"
    >
      <option :value="undefined" disabled>Select option</option>
      <option v-for="item in options" :key="item.id" :value="item.id">
        {{ item.name }}
      </option>
    </select>

    <button>show value</button>
  </main>
</template>

<script setup lang="ts">
interface IOption {
  id: number
  name: string
}
import { ref, watch } from 'vue'
const options = ref<IOption[]>([
  { id: 1, name: 'one' },
  { id: 2, name: 'two' },
  { id: 3, name: 'three' },
])

const selectedOption = ref<IOption>()

watch(selectedOption, (val) => {
  console.log('value', val)
})
</script>
