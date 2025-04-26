import { Pagination } from '@mui/material'
import { CharacterCard } from 'entities/character'
import { Character, Info } from 'shared/api/data'

import s from './style.module.css'

export function SearchResults({
  info,
  page,
  setPage,
}: {
  info: Info<Character[]>
  page: number
  setPage: (page: number) => void
}) {
  return (
    <div className={s.results}>
      <Pagination
        count={info.info.pages}
        shape='rounded'
        page={page}
        onChange={(_, page) => {
          setPage(page)
        }}
      />
      <div className={'cardsLayer'}>
        {info.results.map(c => (
          <CharacterCard key={c.id} info={c} />
        ))}
      </div>
      <Pagination
        count={info.info.pages}
        shape='rounded'
        page={page}
        onChange={(_, page) => {
          setPage(page)
        }}
      />
    </div>
  )
}
