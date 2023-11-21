import { characterApi, CharacterCard } from 'entities/character'
import { Loader } from 'shared/ui'

interface Props {
  favoritesIds: number[]
}

export function List(props: Props) {
  const { data = [], isLoading } = characterApi.useGetCharactersQuery(
    props.favoritesIds
  )

  return isLoading ? (
    <div className='absCentered'>
      <Loader />
    </div>
  ) : (
    <ul>
      {data.map(c => (
        <CharacterCard info={c} />
      ))}
    </ul>
  )
}
