import { favoritesModel } from 'entities/favorites'

export async function add(this: Cli, id: number) {
  const item = { id, timestamp: Date.now() }
  this.dispatch(favoritesModel.actions.addedToFavorites(item))
}

export async function remove(this: Cli, id: number) {
  this.dispatch(favoritesModel.actions.favoriteItemRemoved(id))
}
