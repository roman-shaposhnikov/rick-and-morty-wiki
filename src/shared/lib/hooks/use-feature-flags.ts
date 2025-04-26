import { createContext, useContext } from 'react'
import { FeatureFlags } from 'shared/api/feature-flags'

export const defaultFlags: FeatureFlags = {
  isTelegramShareEnabled: false,
}

export const FeatureFlagsContext = createContext(defaultFlags)

export const useFeatureFlags = () => {
  return useContext(FeatureFlagsContext)
}
