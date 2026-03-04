import z from 'zod'

export const loginSchema = z.object({
  email: z.email('Invalid email'),
  password: z.string('Enter password'),
})

export const registerSchema = z
  .object({
    name: z.string('Enter name').min(2, 'Enter full name'),
    email: z.email('Invalid email'),
    confirmPassword: z.string('Enter password').min(4, 'Minimum 4 characters'),
    password: z.string('Enter password').min(4, 'Minimum 4 characters'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    error: "Passwords don't match",
    path: ['confirmPassword'],
  })
