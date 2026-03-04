export interface ErrorResponse {
  response: Error
}

export interface Error {
  data: ErrorData
}

interface ErrorData {
  detail: string
}
