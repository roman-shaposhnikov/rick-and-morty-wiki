import { Button, TextField } from '@mui/material'
import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import s from './style.module.css'

interface Props {
  query?: string
}

export function Line(props: Props) {
  const [query, setQuery] = useState(props.query)
  const [prevQuery, setPrevQuery] = useState(props.query)
  const navigate = useNavigate()

  if (prevQuery !== props.query) {
    setPrevQuery(props.query)
    setQuery(props.query)
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    navigate(`/search?name=${query}&page=1`)
  }

  return (
    <form onSubmit={handleSubmit} className={s.container}>
      <TextField
        sx={{ width: '500px' }}
        value={query ?? ''}
        onChange={e => {
          setQuery(e.target.value)
        }}
      />
      <Button variant='contained' disabled={!query} type='submit'>
        Search
      </Button>
    </form>
  )
}
