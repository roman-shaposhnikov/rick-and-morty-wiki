import {
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react'
import { BASE_URL, Character } from 'shared/api/data'
import { randomIntArrayInRange } from 'shared/lib/array'

function generateRandomIdsString(count: number) {
  // max=826 -- the biggest character id returned by the api
  return randomIntArrayInRange(1, 826, count).toString()
}

export const BASE_URL_CHARACTER = `${BASE_URL}/character`

export const TEMPLATE_CHARACTER: Character = {
  id: 0,
  name: 'unknown',
  url: '',
  status: 'unknown',
  species: 'unknown',
  type: 'unknown',
  gender: 'unknown',
  origin: { name: 'unknown', url: '' },
  location: { name: 'unknown', url: '' },
  image: '',
  episode: [],
  created: '',
}

export const api = createApi({
  reducerPath: 'character/api',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL_CHARACTER,
  }),
  endpoints: build => ({
    getRandomCharacters: build.query<Character[], number>({
      query: count => ({
        url: `/${generateRandomIdsString(count)}`,
      }),
    }),
    getCharacter: build.query<Character, number>({
      query: id => ({
        url: `/${id}`,
      }),
    }),
  }),
})
