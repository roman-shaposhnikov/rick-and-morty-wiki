import { favoritesModel } from 'entities/favorites'
import { FavoritesList } from 'features/display-favorites'
import { useLayoutEffect, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'shared/lib/redux'
import { Loader } from 'shared/ui'

import s from './style.module.css'

export function Favorites() {
  const dispatch = useAppDispatch()

  const favorites = useSelector(favoritesModel.selectors.favorites)
  const isLoading = useSelector(favoritesModel.selectors.isLoading)

  const favoritesIds = useMemo(() => {
    return favorites.map(i => i.id)
  }, [favorites])

  useLayoutEffect(() => {
    dispatch(favoritesModel.operations.getFavorites())
  }, [dispatch])

  if (isLoading) {
    return (
      <div className='absCentered'>
        <Loader />
      </div>
    )
  }

  return (
    <main className={s.main}>
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
