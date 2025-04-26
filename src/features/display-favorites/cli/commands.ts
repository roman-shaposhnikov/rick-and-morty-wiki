/* eslint-disable no-console */

import { characterApi } from 'entities/character'
import { favoritesModel } from 'entities/favorites'
import { isRTKQResponseError } from 'shared/lib/redux'

export async function show(this: Cli) {
  const favoritesIds = favoritesModel.selectors.favoritesIds(
    this.getState()
  )

  try {
    const favorites = await this.dispatch(
      characterApi.endpoints.getCharacters.initiate(favoritesIds)
    ).unwrap()

    console.log(favorites)
  } catch (err) {
    if (isRTKQResponseError(err)) {
      console.log(err.data.error)
    } else {
      console.log(err)
    }
  }
}
