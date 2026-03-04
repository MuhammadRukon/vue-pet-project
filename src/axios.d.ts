import 'axios'

declare module 'axios' {
  export interface AxiosRequestConfig {
    private?: boolean
  }
}
