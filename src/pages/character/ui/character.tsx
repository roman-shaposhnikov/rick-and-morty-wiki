import { CharacterPage } from 'entities/character'
import { useParams } from 'react-router-dom'

export function Character() {
  const { id = 0 } = useParams()

  return <CharacterPage id={+id} key={id} />
}
