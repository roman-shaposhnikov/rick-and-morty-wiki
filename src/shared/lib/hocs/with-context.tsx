import { FC } from 'react'

export const withContext =
  /* eslint-disable @typescript-eslint/no-explicit-any */

    (Provider: FC<any>, options: any) =>
    (Component: FC<any>): FC<any> =>
    (props: any) =>
      (
        <Provider {...options}>
          <Component {...props} />
        </Provider>
      )
