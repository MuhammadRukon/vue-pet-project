import { QueryKey } from '@/enums'
import type { City } from '@/interfaces/city'
import { getAllCities } from '@/services/city.service'
import { useQuery } from '@tanstack/vue-query'

export function useCityQuery() {
  return useQuery<City[]>({
    queryKey: [QueryKey.Cities],
    queryFn: () => getAllCities(),
  })
}
