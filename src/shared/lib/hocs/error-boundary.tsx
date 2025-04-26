import { FC, ReactNode } from 'react'
import { ErrorBoundary } from 'shared/ui'

export const withErrorBoudary =
  (Component: FC<any>, fallback: ReactNode) => (props: any) =>
    (
      <ErrorBoundary fallback={fallback}>
        <Component {...props} />
      </ErrorBoundary>
    )
