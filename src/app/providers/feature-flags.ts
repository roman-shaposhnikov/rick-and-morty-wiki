import { getFlags } from 'shared/api/feature-flags'
import { withContext } from 'shared/lib/hocs'
import { defaultFlags, FeatureFlagsContext } from 'shared/lib/hooks'

const featureFlags = await getFlags()

export const withFeatureFlags = withContext(
  FeatureFlagsContext.Provider,
  { value: featureFlags ?? defaultFlags }
)
