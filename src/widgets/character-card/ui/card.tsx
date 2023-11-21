import { CharacterCard } from 'entities/character'
import { FavoriteButton } from 'features/add-to-favorite'
import { Character } from 'shared/api/data'

export function Card(props: Character) {
  return (
    <CharacterCard info={props}>
      <FavoriteButton id={props.id} />
    </CharacterCard>
  )
}
