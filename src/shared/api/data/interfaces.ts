export interface CharacterLocation {
  name: string
  url: string
}

export interface ResourceBase {
  id: number
  name: string
  url: string
  created: string
}

export type CharacterStatus = 'Dead' | 'Alive' | 'unknown'
export type CharacterGender =
  | 'Female'
  | 'Male'
  | 'Genderless'
  | 'unknown'

export interface Character extends ResourceBase {
  status: CharacterStatus
  species: string
  type: string
  gender: CharacterGender
  origin: CharacterLocation
  location: CharacterLocation
  image: string
  episode: string[]
}

export interface Location extends ResourceBase {
  type: string
  dimension: string
  residents: string[]
}

export interface Episode extends ResourceBase {
  air_date: string
  episode: string
  characters: string[]
}

export interface ApiResponse<T> {
  /** The HTTP status code from the API response */
  status: number
  /** The HTTP status message from the API response */
  statusMessage: string
  /** The response that was provided by the API */
  data: T
}

export interface ResponseInfo {
  /** The length of the response */
  count: number
  /** The amount of pages */
  pages: number
  /** Link to the next page (if it exists) */
  next: string | null
  /** Link to the previous page (if it exists) */
  prev: string | null
}

export interface ResponseError {
  error: string
}

export interface Info<T> {
  /**
   * The API will automatically paginate the responses. You will receive up to `20` documents per page.
   */
  info: ResponseInfo
  results: T
}
