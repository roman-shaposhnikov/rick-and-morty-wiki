import { Telegram } from '@mui/icons-material'

import s from './style.module.css'

interface Props {
  url: string
  text?: string
  description?: string
}

export function Button(props: Props) {
  const href =
    `https://t.me/share/url?url=${props.url}` +
    (props.description ? `&text=${props.description}` : '')

  return (
    <a href={href} target='_blank' className={s.button}>
      <Telegram />
      {props.text}
    </a>
  )
}
