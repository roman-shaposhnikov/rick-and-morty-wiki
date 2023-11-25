import { withErrorBoundary } from 'shared/lib/hocs'
import { FallbackPage } from 'shared/ui'

import { Favorites } from './ui'

export default withErrorBoundary(Favorites, <FallbackPage />)
