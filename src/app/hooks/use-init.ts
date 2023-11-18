import { userModel } from 'entities/user'
import { useState } from 'react'
import { useAppDispatch } from 'shared/lib/redux'

export function useInit() {
  const [isInitialized, setIsInitialized] = useState(false)

  const dispatch = useAppDispatch()

  dispatch(userModel.operations.init()).then(() => {
    setIsInitialized(true)
  })

  return isInitialized
}
