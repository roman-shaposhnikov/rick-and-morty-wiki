import { characterApi, TEMPLATE_INFO } from 'entities/character'
import { memo } from 'react'
import { Loader } from 'shared/ui'

import { Item } from './item'
import s from './style.module.css'

export const List = memo((props: { query: string }) => {
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
    content = data.results.map(c => <Item key={c.id} {...c} />)
  }

  return <ul className={s.list}>{content}</ul>
})
