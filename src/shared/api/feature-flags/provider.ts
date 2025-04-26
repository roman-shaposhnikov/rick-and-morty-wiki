import { createContext, useContext } from 'react'
import { withContext } from 'shared/lib/hocs'

import { getFlags } from './api'
import { FeatureFlags } from './interfaces'

const defaultFlags: FeatureFlags = {
  isTelegramShareEnabled: false,
}

const featureFlags = await getFlags()

const FeatureFlagsContext = createContext(defaultFlags)

export const withFeatureFlags = withContext(
  FeatureFlagsContext.Provider,
  { value: featureFlags ?? defaultFlags }
)

export const useFeatureFlags = () => {
  return useContext(FeatureFlagsContext)
}
