import { CharacterPage } from 'entities/character'
import { Navigate, useParams } from 'react-router-dom'

export function Character() {
  const { id } = useParams()

  return id ? (
    <CharacterPage id={+id} key={id} />
  ) : (
    <Navigate to={'/'} />
  )
}
