/* eslint-disable no-console */
import { characterApi } from 'entities/character'
import { historyModel } from 'entities/history'
import { selectCurrentPage } from 'shared/api/data'

export async function search(
  this: Cli,
  query: Record<string, string>
) {
  this.dispatch(
    historyModel.actions.searchRequest({
      query: { name: query.name },
      timestamp: Date.now(),
    })
  )

  this.dispatch(
    characterApi.endpoints.getMatchingCharacters.initiate(query)
  )
    .unwrap()
    .then(resp => {
      console.log(resp.info)
      console.table({
        count: resp.info.count,
        pages: resp.info.pages,
        currentPage: selectCurrentPage(resp),
      })
      console.log(resp.results)
    })
    .catch(err => {
      console.log(err.data.error)
    })
}
