import { QueryKey } from '@/enums'
import type { City } from '@/interfaces/city'
import { addCity, getAllCities } from '@/services/city.service'
import { useMutation, useQuery } from '@tanstack/vue-query'

export function useCityQuery() {
  return useQuery<City[]>({
    queryKey: [QueryKey.Cities],
    queryFn: () => getAllCities(),
  })
}

export function useCreateCityMutation() {
  return useMutation({
    mutationFn: (payload: { name: string }) => addCity(payload),
    onSuccess: () => alert('successfully added city'),
    onError: () => console.log('[mutation] failed to created city'),
  })
}
