import { CharacterPage } from 'entities/character'
import { userModel } from 'entities/user'
import { FavoriteButton } from 'features/add-to-favorite'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

export function Character() {
  const { id = 0 } = useParams()
  const isSignedIn = useSelector(userModel.selectors.isSignedIn)

  return (
    <CharacterPage id={+id} key={id}>
      {isSignedIn ? <FavoriteButton id={+id} /> : null}
    </CharacterPage>
  )
}
