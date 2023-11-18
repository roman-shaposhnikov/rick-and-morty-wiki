import { Delete } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { historyModel } from 'entities/history'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { HistoryItem } from 'shared/api/history'

import s from './style.module.css'

export function Item(item: HistoryItem) {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  return (
    <li
      className={s.item}
      onClick={() => {
        navigate(`/search?name=${item.query.name}`)
      }}
    >
      <span>{item.query.name}</span>
      <IconButton
        color='inherit'
        onClick={() => {
          dispatch(
            historyModel.actions.historyItemRemoved(item.timestamp)
          )
        }}
      >
        <Delete color='inherit' />
      </IconButton>
    </li>
  )
}
