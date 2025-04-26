import { historyModel } from 'entities/history'
import { useSelector } from 'react-redux'

import { Item } from '../item'
import s from './style.module.css'

export function List() {
  const history = useSelector(historyModel.selectors.history)

  return (
    <ul className={s.list}>
      {history.map(i => (
        <Item key={i.timestamp} {...i} />
      ))}
    </ul>
  )
}
