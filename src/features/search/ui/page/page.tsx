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
  setPage: (page: number) => void
}

export function Page(props: Props) {
  const {
    data = TEMPLATE_INFO,
    isFetching,
    isError,
  } = characterApi.useGetMatchingCharactersQuery(props.query)

  let content

  if (isFetching) {
    content = (
      <div className='absCentered'>
        <Loader />
      </div>
    )
  } else if (isError) {
    content = <h3>Nothing matching was found</h3>
  } else {
    content = (
      <SearchResults
        info={data}
        page={+props.query.page}
        setPage={props.setPage}
      />
    )
  }

  return (
    <main className={s.main}>
      <SearchLine query={props.query.name} />
      {content}
    </main>
  )
}

function SearchResults({
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
