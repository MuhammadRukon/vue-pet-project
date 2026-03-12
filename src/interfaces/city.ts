export interface City {
  id: number
  name: string
}

export interface CityAdmin extends City {
  updated_at: Date
  created_at: Date
  is_active: boolean
}
