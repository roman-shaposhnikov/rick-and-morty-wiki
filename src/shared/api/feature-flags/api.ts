import { FeatureFlags } from './interfaces'

const BASE_URL = 'http://127.0.0.1:3003/api/feature-flags'

export async function getFlags(): Promise<FeatureFlags | undefined> {
  try {
    const resp = await fetch(BASE_URL)
    return resp.json()
  } catch {
    return undefined
  }
}
