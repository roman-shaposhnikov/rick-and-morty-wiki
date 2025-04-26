/* eslint-disable no-console */

import { characterApi } from 'entities/character'
import { favoritesModel } from 'entities/favorites'

export async function show(this: Cli) {
  const favoritesIds = favoritesModel.selectors.favoritesIds(
    this.getState()
  )

  try {
    const favorites = await this.dispatch(
      characterApi.endpoints.getCharacters.initiate(favoritesIds)
    ).unwrap()

    console.log(favorites)
  } catch (err: any) {
    console.log(err.data.error!)
  }
}
