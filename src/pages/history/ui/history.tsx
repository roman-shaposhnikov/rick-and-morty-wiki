import { HistoryList, historyModel } from 'entities/history'
import { useLayoutEffect } from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'shared/lib/redux'
import { Loader } from 'shared/ui'

export function History() {
  const dispatch = useAppDispatch()
  const isLoading = useSelector(historyModel.selectors.isLoading)

  useLayoutEffect(() => {
    dispatch(historyModel.operations.getHistory())
  }, [dispatch])

  return isLoading ? <Loader /> : <HistoryList />
}
