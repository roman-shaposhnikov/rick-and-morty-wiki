import { characterApi, TEMPLATE_INFO } from 'entities/character'
import { Loader } from 'shared/ui'

import { SearchLine } from '..'
import { SearchResults } from './search-results'
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
    content = <Loader />
  } else if (isError) {
    content = <h3>Nothing matching was found</h3>
  } else {
    content = (
      <SearchResults
        info={data}
        page={+props.query.page ?? '1'}
        setPage={props.setPage}
      />
    )
  }

  return (
    <main className={s.main}>
      <SearchLine query={props.query.name} key={props.query.name} />
      {content}
    </main>
  )
}
