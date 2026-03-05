import type { User } from './user'

interface AuthBase {
  email: string
  password: string
}
export interface Register extends AuthBase {
  name: string
}

export type Login = AuthBase

export interface LoginResponse {
  access_token: string
  user: User
}
