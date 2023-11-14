import { Link } from 'react-router-dom'
import { Character } from 'shared/api/data'

import { Status } from '../status'
import s from './style.module.css'

interface Props {
  info: Character
}

export function Card({ info }: Props) {
  return (
    <article className={s.wrapper}>
      <img src={info.image} alt={info.name} />

      <div className={s.content}>
        <div className={s.section}>
          <Link to={`/character/${info.id}`}>
            <h2>{info.name}</h2>
          </Link>
          <Status status={info.status} species={info.species} />
        </div>

        <div className={s.section}>
          <div className='textGray'>Last known location:</div>
          {info.location.name}
        </div>
      </div>
    </article>
  )
}
