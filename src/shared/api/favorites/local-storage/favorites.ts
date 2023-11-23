import { Item } from '../interfaces'
import { getUserFavorites, removeItem, saveItem } from './lib'

export async function save(
  item: Item,
  userId: string
): Promise<Item> {
  return saveItem(item, userId)
}

export async function remove(
  itemId: number,
  userId: string
): Promise<void> {
  return removeItem(itemId, userId)
}

export async function getAll(userId: string): Promise<Item[]> {
  return getUserFavorites(userId)
}
