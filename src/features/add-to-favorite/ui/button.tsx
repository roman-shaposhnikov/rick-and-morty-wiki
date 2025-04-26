import { Favorite, FavoriteBorder } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { favoritesModel } from 'entities/favorites'
import { useState } from 'react'
import { useAppDispatch } from 'shared/lib/redux'

interface Props {
  id: number
  isFavorite: boolean
}

export function Button(props: Props) {
  const [isFavorite, setIsFavorite] = useState(props.isFavorite)
  const dispatch = useAppDispatch()

  return (
    <IconButton>
      {isFavorite ? (
        <Favorite
          onClick={() => {
            setIsFavorite(false)
            dispatch(
              favoritesModel.actions.favoriteItemRemoved(props.id)
            )
          }}
        />
      ) : (
        <FavoriteBorder
          onClick={() => {
            setIsFavorite(true)
            const item = { id: props.id, timestamp: Date.now() }
            dispatch(favoritesModel.actions.addedToFavorites(item))
          }}
        />
      )}
    </IconButton>
  )
}
