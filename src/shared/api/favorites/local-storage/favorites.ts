import { Item } from '../interfaces'
import { getUserFavorites, removeItem, saveItem } from './lib'

export async function save(item: Item, userId: string) {
  return saveItem(item, userId)
}

export async function remove(itemId: number, userId: string) {
  return removeItem(itemId, userId)
}

export async function getAll(userId: string) {
  return getUserFavorites(userId)
}
