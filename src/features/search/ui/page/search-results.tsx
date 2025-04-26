import { Pagination } from '@mui/material'
import { Character, Info } from 'shared/api/data'
import { CharacterCard } from 'widgets/character-card'

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
          <CharacterCard key={c.id} {...c} />
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
