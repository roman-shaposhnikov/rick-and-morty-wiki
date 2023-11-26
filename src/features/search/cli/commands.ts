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
    .then(({ info, results }) => {
      console.table({
        count: info.count,
        pages: info.pages,
        currentPage: selectCurrentPage(info),
      })
      console.log(results)
    })
    .catch(err => {
      console.log(err.data.error)
    })
}
