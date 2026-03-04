import { QueryKey } from '@/enums'
import type { City } from '@/interfaces/city'
import { getAllCities } from '@/services/cities.service'
import { useQuery } from '@tanstack/vue-query'

export function useCitiesQuery() {
  return useQuery<City[]>({
    queryKey: [QueryKey.Cities],
    queryFn: () => getAllCities(),
  })
}
