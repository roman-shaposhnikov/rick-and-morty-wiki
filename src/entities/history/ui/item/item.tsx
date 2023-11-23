import { Delete } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { historyModel } from 'entities/history'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { HistoryItem } from 'shared/api/history'

import s from './style.module.css'

export function Item(item: HistoryItem) {
  const dispatch = useDispatch()

  return (
    <li>
      <Link className={s.item} to={`/search?name=${item.query.name}`}>
        <span>{item.query.name}</span>
        <IconButton
          color='inherit'
          onClick={e => {
            e.stopPropagation()
            dispatch(
              historyModel.actions.historyItemRemoved(item.timestamp)
            )
          }}
        >
          <Delete color='inherit' />
        </IconButton>
      </Link>
    </li>
  )
}
