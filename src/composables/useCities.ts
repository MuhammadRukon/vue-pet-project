import { BASE_URL } from '@/constants'
import { QueryKey } from '@/enums'
import type { City } from '@/interfaces/city'
import { useQuery } from '@tanstack/vue-query'

export function useCitiesQuery() {
  return useQuery<City[]>({
    queryKey: [QueryKey.Cities],
    queryFn: () => fetch(BASE_URL + '/cities').then((res) => res.json()),
  })
}
