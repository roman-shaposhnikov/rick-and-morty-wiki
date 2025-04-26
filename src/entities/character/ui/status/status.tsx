import { Circle } from '@mui/icons-material'
import PT from 'prop-types'
import { CharacterStatus } from 'shared/api/data'

import s from './style.module.css'

export function Status(props: {
  status: CharacterStatus
  species: string
}) {
  return (
    <span className={s.status}>
      <StatusIcon status={props.status} />
      <span>{`${props.status} - ${props.species}`}</span>
    </span>
  )
}

Status.propTypes = {
  status: PT.oneOf(['Dead', 'Alive', 'unknown']),
  species: PT.string,
}

function StatusIcon(props: { status: CharacterStatus }) {
  let color

  switch (props.status) {
    case 'Alive':
      color = 'green'
      break
    case 'Dead':
      color = 'red'
      break
    default:
      color = 'grey'
  }

  return <Circle sx={{ color, fontSize: '16px' }} />
}

StatusIcon.propTypes = {
  status: PT.oneOf(['Dead', 'Alive', 'unknown']),
}
