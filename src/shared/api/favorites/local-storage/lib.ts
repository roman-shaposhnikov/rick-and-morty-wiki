import { Item } from '../interfaces'

const FAVORITES_KEY = 'favorites'

type Favorites = Record<string, Item[]>

function getFavorites(): Favorites {
  return JSON.parse(localStorage.getItem(FAVORITES_KEY) ?? '{}')
}

export function getUserFavorites(userId: string): Item[] {
  const favorites = getFavorites()

  return favorites[userId] ?? []
}

export function saveItem(item: Item, userId: string): Item {
  const favorites = getFavorites()
  favorites[userId] ??= []

  favorites[userId].push(item)

  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites))

  return item
}

export function removeItem(itemId: number, userId: string): void {
  const favorites = getFavorites()

  if (!favorites[userId]) {
    return
  }

  favorites[userId] = favorites[userId].filter(i => i.id !== itemId)

  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites))
}
