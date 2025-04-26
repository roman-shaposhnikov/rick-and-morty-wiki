/* eslint-disable no-console */
import { characterApi } from 'entities/character'
import { historyModel } from 'entities/history'
import { selectCurrentPage } from 'shared/api/data'

export async function search(
  this: Cli,
  name: string,
  page: number = 1
) {
  this.dispatch(
    historyModel.actions.searchRequested({
      query: { name, page },
      timestamp: Date.now(),
    })
  )

  this.dispatch(
    characterApi.endpoints.getMatchingCharacters.initiate({
      name,
      page,
    })
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
