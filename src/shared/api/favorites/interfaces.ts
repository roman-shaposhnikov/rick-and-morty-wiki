export interface Item {
  id: number
  timestamp: number
}

type Save = (item: Item, userId: string) => Promise<Item>
type Remove = (itemId: number, userId: string) => Promise<void>
type GetAll = (userId: string) => Promise<Item[]>

export interface FavoritesAPI {
  save: Save
  remove: Remove
  getAll: GetAll
}
