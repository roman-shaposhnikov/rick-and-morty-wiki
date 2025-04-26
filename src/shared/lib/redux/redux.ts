import {
  AsyncThunkOptions,
  AsyncThunkPayloadCreator,
  createAsyncThunk,
} from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

export const useAppDispatch = () => useDispatch<AppDispatch>()

export const createAppThunk = <ThunkArg = void, Returned = void>(
  typePrefix: string,
  payloadCreator: AsyncThunkPayloadCreator<
    Returned,
    ThunkArg,
    { state: RootState }
  >,
  options?:
    | AsyncThunkOptions<ThunkArg, { state: RootState }>
    | undefined
) => {
  return createAsyncThunk<Returned, ThunkArg, { state: RootState }>(
    typePrefix,
    payloadCreator,
    options
  )
}
