import { characterApi } from 'entities/character'
import { Loader } from 'shared/ui'
import { CharacterCard } from 'widgets/character-card'

interface Props {
  favoritesIds: number[]
}

export function List(props: Props) {
  const { data = [], isLoading } = characterApi.useGetCharactersQuery(
    props.favoritesIds
  )

  return isLoading ? (
    <Loader />
  ) : (
    <ul>
      {data.map(c => (
        <CharacterCard key={c.id} {...c} />
      ))}
    </ul>
  )
}
