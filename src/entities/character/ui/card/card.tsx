import { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import { Character } from 'shared/api/data'

import { Status } from '../status'
import s from './style.module.css'

interface Props {
  info: Character
}

export function Card({
  info,
  children,
}: Props & { children: ReactNode }) {
  const navigate = useNavigate()
  return (
    <article
      className={s.wrapper}
      onClick={() => {
        navigate(`/character/${info.id}`)
      }}
    >
      <img src={info.image} alt={info.name} />

      <div className={s.content}>
        <div className={s.info}>
          <div className={s.section}>
            <h2 className={s.name}>{info.name}</h2>
            <Status status={info.status} species={info.species} />
          </div>

          <div className={s.section}>
            <div className='textGray'>Last known location:</div>
            {info.location.name}
          </div>
        </div>

        {children ? (
          <ul
            className={s.actions}
            onClick={e => {
              e.stopPropagation()
            }}
          >
            {children}
          </ul>
        ) : null}
      </div>
    </article>
  )
}
