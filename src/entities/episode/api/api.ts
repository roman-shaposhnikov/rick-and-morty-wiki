import {
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react'
import { BASE_URL, Episode } from 'shared/api/data'

export interface EpisodeInfo {
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

const extractIdFromUrl = (url: string): number => {
  return +url.slice(BASE_URL_EPISODE.length)
}

const transformUrlsToIds = (urls: string[]): number[] => {
  return urls.map(extractIdFromUrl)
}

function transformEpisodes(
  response: Episode[] | Episode
): EpisodeInfo[] {
  if (Array.isArray(response)) {
    return response.map(extractEpisodeInfo)
  }

  return [extractEpisodeInfo(response)]
}

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
      transformResponse: transformEpisodes,
    }),

    getEpisodesByUrls: build.query<EpisodeInfo[], string[] | string>({
      query: ids => ({
        url: `/${
          Array.isArray(ids)
            ? transformUrlsToIds(ids).toString()
            : extractIdFromUrl(ids)
        }`,
      }),
      transformResponse: transformEpisodes,
    }),
  }),
})
