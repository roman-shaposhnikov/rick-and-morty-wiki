import { withErrorBoundary } from 'shared/lib/hocs'
import { FallbackPage } from 'shared/ui'

import { History } from './ui'

export default withErrorBoundary(History, <FallbackPage />)
