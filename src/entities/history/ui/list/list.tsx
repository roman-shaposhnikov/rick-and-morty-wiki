import { HistoryItem } from 'shared/api/history'

import { Item } from '../item'
import s from './style.module.css'

export function List({ items }: { items: HistoryItem[] }) {
  return (
    <ul className={s.list}>
      {items.map(i => (
        <Item key={i.timestamp} {...i} />
      ))}
    </ul>
  )
}
