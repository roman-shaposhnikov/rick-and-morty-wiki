import { Item } from '../interfaces'
import { getUserHistory, removeItem, saveItem } from './lib'

export async function save(
  item: Item,
  userId: string
): Promise<Item> {
  return saveItem(item, userId)
}

export async function remove(
  timestamp: number,
  userId: string
): Promise<void> {
  return removeItem(timestamp, userId)
}

export async function getAll(userId: string): Promise<Item[]> {
  return getUserHistory(userId)
}
