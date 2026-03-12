import { QueryKey } from '@/enums'
import type { City, CityAdmin } from '@/interfaces/city'
import { addCity, deleteCity, getAllCities, getAllCitiesAdmin } from '@/services/city.service'
import { useMutation, useQuery } from '@tanstack/vue-query'

export function useCityQuery() {
  return useQuery<City[]>({
    queryKey: [QueryKey.Cities, 'public'],
    queryFn: getAllCities,
    staleTime: 1000 * 60 * 10,
  })
}

export function useAdminCityQuery() {
  return useQuery<CityAdmin[]>({
    queryKey: [QueryKey.Cities, 'admin'],
    queryFn: getAllCitiesAdmin,
    staleTime: 0,
  })
}

export function useCreateCityMutation() {
  return useMutation({
    mutationFn: (payload: { name: string }) => addCity(payload),
    onSuccess: () => alert('successfully added city'),
    onError: () => console.log('[mutation] failed to create city'),
  })
}

export function useDeleteCityMutation() {
  return useMutation({
    mutationFn: (id: string) => deleteCity(id),
    onSuccess: () => alert('successfully deleted city'),
    onError: () => console.log('[mutation] failed to delete city'),
  })
}
