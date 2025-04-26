import { Pagination } from '@mui/material'
import {
  characterApi,
  CharacterCard,
  TEMPLATE_INFO,
} from 'entities/character'
import { Character, Info } from 'shared/api/data'
import { Loader } from 'shared/ui'

import { SearchLine } from '..'
import s from './style.module.css'

interface Props {
  query: Record<string, string>
  nextPage: (page: number) => void
}

export function Page(props: Props) {
  const { data = TEMPLATE_INFO, isLoading } =
    characterApi.useGetMatchingCharactersQuery(props.query)

  return (
    <main className={s.main}>
      <SearchLine query={props.query.name} />

      {isLoading ? (
        <div className='absCentered'>
          <Loader />
        </div>
      ) : (
        <SearchResults info={data} nextPage={props.nextPage} />
      )}
    </main>
  )
}

function SearchResults({
  info,
  nextPage,
}: {
  info: Info<Character[]>
  nextPage: (page: number) => void
}) {
  return (
    <div className={s.results}>
      <Pagination
        count={info.info.pages}
        shape='rounded'
        onChange={(_, page) => {
          nextPage(page)
        }}
      />
      <div className={'cardsLayer'}>
        {info.results.map(c => (
          <CharacterCard key={c.id} info={c} />
        ))}
      </div>
      <Pagination count={info.info.pages} shape='rounded' />
    </div>
  )
}
