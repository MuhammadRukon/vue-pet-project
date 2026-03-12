import { axiosClient } from '@/api'
import type { City, CityAdmin } from '@/interfaces/city'

async function fetchCities<T>(endpoint: string, isPrivate: boolean): Promise<T[]> {
  const { data } = await axiosClient(endpoint, { private: isPrivate })
  return data
}

export const getAllCities = () => fetchCities<City>('/cities', false)
export const getAllCitiesAdmin = () => fetchCities<CityAdmin>('/admin/cities', true)

export async function addCity(payload: { name: string }) {
  const { data } = await axiosClient.post('/admin/cities', payload)
  return data
}

export async function deleteCity(id: string) {
  const { data } = await axiosClient.delete(`/admin/cities/${id}`)
  return data
}
