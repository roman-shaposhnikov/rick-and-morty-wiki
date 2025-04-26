import { FC, ReactNode } from 'react'
import { ErrorBoundary } from 'shared/ui'

export const withErrorBoundary =
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (Component: FC<any>, fallback: ReactNode) => (props: any) =>
    (
      <ErrorBoundary fallback={fallback}>
        <Component {...props} />
      </ErrorBoundary>
    )
