import { HistoryList, historyModel } from 'entities/history'
import { useLayoutEffect } from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'shared/lib/redux'
import { Loader } from 'shared/ui'

export function History() {
  const dispatch = useAppDispatch()
  const isLoading = useSelector(historyModel.selectors.isLoading)
  const history = useSelector(historyModel.selectors.history)

  useLayoutEffect(() => {
    dispatch(historyModel.operations.getHistory())
  }, [dispatch])

  if (isLoading) {
    return <Loader />
  }

  return (
    <main className={'page'}>
      {!history.length ? (
        <div className='absCentered'>
          <h2>There is nothing in history yet</h2>
        </div>
      ) : (
        <HistoryList items={history} />
      )}
    </main>
  )
}
