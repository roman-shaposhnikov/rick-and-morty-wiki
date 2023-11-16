import {
  characterApi,
  CharacterStatus,
  TEMPLATE_INFO,
} from 'entities/character'
import { memo } from 'react'
import { Link } from 'react-router-dom'
import { Character } from 'shared/api/data'
import { Loader } from 'shared/ui'

import s from './style.module.css'

function Suggest(info: Character) {
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

export const SuggestsList = memo((props: { query: string }) => {
  const {
    data: data = TEMPLATE_INFO,
    isError,
    isFetching,
  } = characterApi.useGetMatchingCharactersQuery({
    name: props.query,
  })

  let content

  if (isFetching) {
    content = (
      <div className='absCentered'>
        <Loader />
      </div>
    )
  } else if (isError) {
    content = (
      <div className='absCentered'>
        <h3>Nothing matching was found</h3>
      </div>
    )
  } else {
    content = data.results.map(c => <Suggest key={c.id} {...c} />)
  }

  return <ul className={s.list}>{content}</ul>
})
