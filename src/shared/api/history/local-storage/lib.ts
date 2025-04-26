import { Item } from '../interfaces'

const HISTORY_KEY = 'history'

type History = Record<string, Item[]>

function getHistory(): History {
  return JSON.parse(localStorage.getItem(HISTORY_KEY) ?? '{}')
}

export function getUserHistory(userId: string): Item[] {
  const history = getHistory()

  return history[userId] ?? []
}

export function saveItem(item: Item, userId: string): Item {
  const history = getHistory()
  history[userId] ??= []

  history[userId].push(item)

  localStorage.setItem(HISTORY_KEY, JSON.stringify(history))

  return item
}

export function removeItem(timestamp: number, userId: string): void {
  const history = getHistory()

  if (!history[userId]) {
    return
  }

  history[userId] = history[userId].filter(
    i => i.timestamp !== timestamp
  )

  localStorage.setItem(HISTORY_KEY, JSON.stringify(history))
}
