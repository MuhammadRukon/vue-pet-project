<script setup lang="ts">
import { useRegisterMutation } from '@/composables/useAuth'
import type { ErrorResponse } from '@/interfaces'
import type { Register } from '@/interfaces/auth'
import { registerSchema } from '@/schemas/auth.schema'
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import { RouterLink } from 'vue-router'

const schema = toTypedSchema(registerSchema)
const { defineField, errors, handleSubmit } = useForm({
  validationSchema: schema,
})
const [name, nameProps] = defineField('name')
const [email, emailProps] = defineField('email')
const [password, passwordProps] = defineField('password')
const [confirmPassword, confirmPasswordProps] = defineField('confirmPassword')

const { mutateAsync: registerMutationAsync } = useRegisterMutation()

const onSubmit = handleSubmit(async (values) => {
  const payload: Register = {
    email: values.email,
    password: values.password,
    name: values.name,
  }
  try {
    const response = await registerMutationAsync(payload)
    console.log(response, 'response')
  } catch (error) {
    const errorResonse = error as ErrorResponse
    alert(errorResonse.response.data.detail)
  }
})
</script>

<template>
  <div class="flex h-dvh items-center justify-center p-4">
    <form
      @submit="onSubmit"
      class="w-full max-w-md space-y-6 rounded-xl border border-gray-200 bg-white p-8 shadow-sm"
    >
      <div class="space-y-2 text-center">
        <h1 class="text-2xl font-bold tracking-tight text-gray-900">Register</h1>
        <p class="text-sm text-gray-500">Enter your credentials create your account</p>
      </div>

      <div class="space-y-4">
        <div class="flex flex-col gap-1.5">
          <label for="name" class="text-sm font-medium text-gray-700">Name</label>
          <input
            v-model="name"
            v-bind="nameProps"
            id="name"
            placeholder="John doe"
            :class="[
              'block w-full rounded-lg border px-3 py-2 text-sm transition-colors outline-none focus:ring-2 focus:ring-blue-500/20',
              errors.name
                ? 'border-red-500 focus:border-red-500'
                : 'border-gray-300 focus:border-gray-500',
            ]"
          />
          <p v-if="errors.name" class="text-xs font-medium text-red-500">{{ errors.name }}</p>
        </div>

        <div class="flex flex-col gap-1.5">
          <label for="email" class="text-sm font-medium text-gray-700">Email</label>
          <input
            v-model="email"
            v-bind="emailProps"
            id="email"
            placeholder="name@example.com"
            :class="[
              'block w-full rounded-lg border px-3 py-2 text-sm transition-colors outline-none focus:ring-2 focus:ring-blue-500/20',
              errors.email
                ? 'border-red-500 focus:border-red-500'
                : 'border-gray-300 focus:border-gray-500',
            ]"
          />
          <p v-if="errors.email" class="text-xs font-medium text-red-500">{{ errors.email }}</p>
        </div>

        <div class="flex flex-col gap-1.5">
          <label for="password" class="text-sm font-medium text-gray-700">Password</label>
          <input
            v-model="password"
            v-bind="passwordProps"
            id="password"
            type="password"
            placeholder="••••••••"
            :class="[
              'block w-full rounded-lg border px-3 py-2 text-sm transition-colors outline-none focus:ring-2 focus:ring-blue-500/20',
              errors.password
                ? 'border-red-500 focus:border-red-500'
                : 'border-gray-300 focus:border-gray-500',
            ]"
          />
          <p v-if="errors.password" class="text-xs font-medium text-red-500">
            {{ errors.password }}
          </p>
        </div>

        <div class="flex flex-col gap-1.5">
          <label for="password" class="text-sm font-medium text-gray-700">Confirm password</label>
          <input
            v-model="confirmPassword"
            v-bind="confirmPasswordProps"
            id="confirmPassword"
            type="password"
            placeholder="••••••••"
            :class="[
              'block w-full rounded-lg border px-3 py-2 text-sm transition-colors outline-none focus:ring-2 focus:ring-blue-500/20',
              errors.confirmPassword
                ? 'border-red-500 focus:border-red-500'
                : 'border-gray-300 focus:border-gray-500',
            ]"
          />
          <p v-if="errors.confirmPassword" class="text-xs font-medium text-red-500">
            {{ errors.confirmPassword }}
          </p>
        </div>
      </div>

      <button
        type="submit"
        class="w-full active:scale-95 transition-all duration-300 ease-in-out rounded-lg bg-black px-4 py-2 text-sm font-semibold text-white"
      >
        Sign In
      </button>

      <p class="text-center text-sm text-gray-700">
        Already have an account?
        <RouterLink class="underline text-blue-800" to="/login"> Login now </RouterLink>
      </p>
    </form>
  </div>
</template>
