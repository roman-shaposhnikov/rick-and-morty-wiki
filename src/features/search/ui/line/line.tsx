import { Button, TextField } from '@mui/material'
import { historyModel } from 'entities/history'
import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDebounce } from 'shared/lib/hooks'
import { useAppDispatch } from 'shared/lib/redux'

import { SuggestsList } from '../suggest'
import s from './style.module.css'

interface Props {
  query?: string
}

export function Line(props: Props) {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const [query, setQuery] = useState(props.query)
  const [prevQuery, setPrevQuery] = useState(props.query)
  const [isFocused, setIsFocused] = useState(false)

  if (prevQuery !== props.query) {
    setPrevQuery(props.query)
    setQuery(props.query)
  }

  const debouncedQuery = useDebounce(query, 500)

  const isSuggestVisible = !!debouncedQuery && isFocused

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    navigate(`/search?name=${query}&page=1`)
    dispatch(
      historyModel.actions.searchRequest({
        query: { name: query! },
        timestamp: Date.now(),
      })
    )
  }

  return (
    <>
      {!isFocused ? null : (
        <div
          className='absCentered'
          onClick={() => {
            setIsFocused(false)
          }}
        />
      )}
      <div className={s.container}>
        <form onSubmit={handleSubmit} className={s.line}>
          <TextField
            sx={{ width: '500px' }}
            value={query ?? ''}
            onChange={e => {
              setQuery(e.target.value)
            }}
            onFocus={() => {
              setIsFocused(true)
            }}
          />
          <Button variant='contained' disabled={!query} type='submit'>
            Search
          </Button>
        </form>
        {!isSuggestVisible ? null : (
          // TODO: добавить LayoutEffect чтобы позиционировать SuggestsList, исходя из его высоты
          <div className={s.suggestList}>
            <SuggestsList query={debouncedQuery} />
          </div>
        )}
      </div>
    </>
  )
}
