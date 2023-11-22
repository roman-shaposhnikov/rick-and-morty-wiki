import { CharacterCard } from 'entities/character'
import { userModel } from 'entities/user'
import { FavoriteButton } from 'features/add-to-favorite'
import { useSelector } from 'react-redux'
import { Character } from 'shared/api/data'

export function Card(props: Character) {
  const isSignedIn = useSelector(userModel.selectors.isSignedIn)

  return (
    <CharacterCard info={props}>
      {isSignedIn ? <FavoriteButton id={props.id} /> : null}
    </CharacterCard>
  )
}
