import { FavoritesAPI } from './interfaces'

export type { Item as FavoritesItem } from './interfaces'

export const favoritesAPI: FavoritesAPI = await (async () => {
  switch (import.meta.env.VITE_REMOTE_STORE) {
    case 'ls':
      return (await import('./local-storage')).lsFavorites
    default:
      return (await import('./local-storage')).lsFavorites
  }
})()
