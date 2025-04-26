import cn from 'classnames'
import { favoritesModel } from 'entities/favorites'
import { FavoritesList } from 'features/display-favorites'
import { useSelector } from 'react-redux'
import { Loader } from 'shared/ui'

import s from './style.module.css'

export function Favorites() {
  const favoritesIds = useSelector(
    favoritesModel.selectors.favoritesIds
  )
  const isLoading = useSelector(favoritesModel.selectors.isLoading)

  if (isLoading) {
    return (
      <div className='absCentered'>
        <Loader />
      </div>
    )
  }

  return (
    <main className={cn('page', s.main)}>
      {!favoritesIds.length ? (
        <div className='absCentered'>
          <h2>There is nothing in favorites yet</h2>
        </div>
      ) : (
        <FavoritesList favoritesIds={favoritesIds} />
      )}
    </main>
  )
}
