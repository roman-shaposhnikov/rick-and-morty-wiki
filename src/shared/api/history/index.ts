import { HistoryAPI } from './interfaces'

export type { Item as HistoryItem } from './interfaces'

export const historyAPI: HistoryAPI = await (async () => {
  switch (import.meta.env.VITE_REMOTE_STORE) {
    case 'ls':
      return (await import('./local-storage')).lsHist
    default:
      return (await import('./local-storage')).lsHist
  }
})()
