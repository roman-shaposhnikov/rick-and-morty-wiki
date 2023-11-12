import {
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react'
import { Character } from 'shared/api/data'
import { randomIntArrayInRange } from 'shared/lib/array'

function generateRandomIdsString(count: number) {
  // max=826 -- the biggest character id returned by the api
  return randomIntArrayInRange(1, 826, count).toString()
}

export const api = createApi({
  reducerPath: 'character/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://rickandmortyapi.com/api',
  }),
  endpoints: build => ({
    getRandomCharacters: build.query<Character[], number>({
      query: count => ({
        url: `/character/${generateRandomIdsString(count)}`,
      }),
    }),
  }),
})
