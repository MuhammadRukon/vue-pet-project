import { axiosClient } from '@/api'
import type { City } from '@/interfaces/city'

export async function getAllCities(): Promise<City[]> {
  const { data } = await axiosClient('/cities')
  return data
}
