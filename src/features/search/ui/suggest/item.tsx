import { CharacterStatus } from 'entities/character'
import { Link } from 'react-router-dom'
import { Character } from 'shared/api/data'

import s from './style.module.css'

export function Item(info: Character) {
  return (
    <li>
      <Link className={s.suggest} to={`/character/${info.id}`}>
        <div>
          <img src={info.image} alt={info.name} />
          <span className={s.name}>{info.name}</span>
        </div>
        <CharacterStatus
          status={info.status}
          species={info.species}
        />
      </Link>
    </li>
  )
}
