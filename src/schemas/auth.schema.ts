import { z } from 'zod'

export const loginSchema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(1, 'Enter password'),
})

export const registerSchema = z
  .object({
    name: z.string().min(2, 'Enter full name'),
    email: z.string().email('Invalid email'),
    confirmPassword: z.string().min(4, 'Minimum 4 characters'),
    password: z.string().min(4, 'Minimum 4 characters'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  })
