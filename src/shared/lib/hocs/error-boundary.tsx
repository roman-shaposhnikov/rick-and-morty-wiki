import { FC, ReactNode } from 'react'

import { ErrorBoundary } from '../ui'

export const withErrorBoudary =
  (Component: FC<any>, fallback: ReactNode) => (props: any) =>
    (
      <ErrorBoundary fallback={fallback}>
        <Component {...props} />
      </ErrorBoundary>
    )
