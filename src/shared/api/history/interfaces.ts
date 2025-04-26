export interface Item {
  query: Record<string, string | number>
  timestamp: number
}

type Save = (item: Item, userId: string) => Promise<Item>
type Remove = (timestamp: number, userId: string) => Promise<void>
type GetAll = (userId: string) => Promise<Item[]>

export interface HistoryAPI {
  save: Save
  remove: Remove
  getAll: GetAll
}
