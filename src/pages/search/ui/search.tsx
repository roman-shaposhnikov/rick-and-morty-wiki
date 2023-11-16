import { transformURLSearchParamsToRecord } from 'entities/character'
import { SearchPage } from 'features/search'
import { useSearchParams } from 'react-router-dom'

export function Search() {
  const [params, setParams] = useSearchParams()

  const query = transformURLSearchParamsToRecord(params)

  const setPage = (page: number) => {
    setParams(prev => ({
      name: prev.get('name') || '',
      page: `${page}`,
    }))
  }

  return <SearchPage query={query} setPage={setPage} />
}
