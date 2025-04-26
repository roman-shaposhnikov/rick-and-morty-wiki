import { Favorite, FavoriteBorder } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { favoritesModel } from 'entities/favorites'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'shared/lib/redux'

interface Props {
  id: number
}

export function Button({ id }: Props) {
  const isFavorite = useSelector(
    favoritesModel.selectors.isFavorite(id)
  )
  const dispatch = useAppDispatch()

  function handleClick() {
    if (isFavorite) {
      dispatch(favoritesModel.actions.favoriteItemRemoved(id))
      return
    }

    const item = { id, timestamp: Date.now() }
    dispatch(favoritesModel.actions.addedToFavorites(item))
  }

  return (
    <IconButton
      sx={{ color: 'var(--text-color)' }}
      onClick={handleClick}
    >
      {isFavorite ? (
        <Favorite sx={{ color: 'inherit' }} />
      ) : (
        <FavoriteBorder sx={{ color: 'inherit' }} />
      )}
    </IconButton>
  )
}
