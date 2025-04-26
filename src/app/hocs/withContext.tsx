import { FC } from 'react'

/* eslint-disable @typescript-eslint/no-explicit-any */
// 'any' use reason
// TS Error: Type 'unknown' is not assignable to type 'IntrinsicAttributes'.ts(2322)
export const withContext =
  (Provider: FC<any>, options: any) =>
  (Component: FC<any>) =>
  (props: any) =>
    (
      <Provider {...options}>
        <Component {...props} />
      </Provider>
    )
