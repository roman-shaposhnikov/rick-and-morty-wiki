import {
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react'
import { BASE_URL, Episode } from 'shared/api/data'

export type EpisodeInfo = {
  id: number
  name: string
  airDate: string
  episode: string
}

const extractEpisodeInfo = (e: Episode): EpisodeInfo => ({
  id: e.id,
  name: e.name,
  airDate: e['air_date'],
  episode: e.episode,
})

export const BASE_URL_EPISODE = `${BASE_URL}/episode`

export const api = createApi({
  reducerPath: 'episode/api',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL_EPISODE,
  }),
  endpoints: build => ({
    getEpisodes: build.query<EpisodeInfo[], number[] | number>({
      query: ids => ({
        url: `/${Array.isArray(ids) ? ids.toString() : ids}`,
      }),
      transformResponse(response: Episode[] | Episode) {
        if (Array.isArray(response)) {
          return response.map(e => extractEpisodeInfo(e))
        }

        return [extractEpisodeInfo(response)]
      },
    }),
  }),
})
