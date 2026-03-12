<script setup lang="ts">
import {
  useAdminCityQuery,
  useCreateCityMutation,
  useDeleteCityMutation,
} from '@/composables/useCity.ts'
import { QueryKey } from '@/enums'
import { formatDate } from '@/lib'
import { IconEdit, IconTrash } from '@tabler/icons-vue'
import { useQueryClient } from '@tanstack/vue-query'
import { ref, watch } from 'vue'

const city = ref('')
const { mutateAsync: addCityAsync } = useCreateCityMutation()
const { mutateAsync: deleteCityAsync } = useDeleteCityMutation()
const { data: cities } = useAdminCityQuery()
const queryClient = useQueryClient()

watch(cities, (newVal) => {
  console.log(newVal, 'newval')
})

async function handleAdd() {
  await addCityAsync({ name: city.value })
  city.value = ''
  queryClient.invalidateQueries({ queryKey: [QueryKey.Cities] })
}

async function handleEdit(id: string) {
  alert(`edit will be implemented soon ${id}`)
}

async function handleDelete(id: string) {
  await deleteCityAsync(id)
  queryClient.invalidateQueries({ queryKey: [QueryKey.Cities] })
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
      @click="handleAdd"
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

  <div class="mt-4">
    <table class="w-full text-left text-sm border-collapse">
      <thead class="bg-gray-100 text-xs uppercase text-gray-700">
        <tr class="*:px-4 *:py-3 *:border-b">
          <th>no</th>
          <th>city name</th>
          <th>created at</th>
          <th>updated at</th>
          <th>status</th>
          <th class="text-right">actions</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-200">
        <tr
          v-for="(c, index) in cities"
          class="hover:bg-gray-100 transition-colors *:px-4 *:py-4"
          :key="c.id"
        >
          <td>{{ index + 1 }}</td>
          <td class="font-medium text-gray-900">{{ c.name }}</td>
          <td class="font-medium text-gray-900">
            {{ formatDate(c.updated_at) }}
          </td>
          <td class="font-medium text-gray-900">
            {{ formatDate(c.updated_at) }}
          </td>
          <td class="font-medium text-gray-900">{{ c.is_active ? 'Active' : 'Inactive' }}</td>
          <td class="text-right flex items-center gap-2 justify-end">
            <button @:click="() => handleEdit(String(c.id))" class="text-blue-600 cursor-pointer">
              <IconEdit size="18" />
            </button>
            <button @:click="() => handleDelete(String(c.id))" class="text-red-600 cursor-pointer">
              <IconTrash size="18" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
