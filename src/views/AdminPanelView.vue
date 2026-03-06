<script setup lang="ts">
import { useCreateCityMutation } from '@/composables/useCity.ts'
import { ref, watch } from 'vue'

const city = ref('')
const { mutate: addCity } = useCreateCityMutation()

watch(city, (newVal, oldVal) => {
  console.log(newVal)
})

async function handleClick() {
  addCity({ name: city.value })
}
</script>

<template>
  <div class="flex items-end justify-between gap-2">
    <div class="flex flex-col gap-1.5 flex-1">
      <label for="city" class="text-sm font-medium text-gray-700">Add city</label>
      <input
        v-model="city"
        id="city"
        placeholder="Add city"
        class="block w-full rounded-lg border px-3 py-2 text-sm transition-colors outline-none focus:ring-2 focus:ring-blue-500/20 border-gray-500 focus:border-gray-500"
      />
    </div>

    <button
      :disabled="!city.length"
      @click="handleClick"
      :class="[
        'w-fit rounded-lg bg-black px-4 py-2 text-sm font-semibold text-white',
        !city.length
          ? 'bg-gray-200 cursor-not-allowed'
          : 'active:scale-95 transition-all duration-300 ease-in-out',
      ]"
    >
      + Add
    </button>
  </div>
</template>
