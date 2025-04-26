import { Button, TextField } from '@mui/material'
import { HTMLInputTypeAttribute } from 'react'

import style from './style.module.css'

type Props = {
  topInputLabel: string
  bottomInputLabel: string

  topInputType: HTMLInputTypeAttribute
  bottomInputType: HTMLInputTypeAttribute

  buttonText: string
}

export function AuthForm(props: Props) {
  return (
    <form className={style.form}>
      <TextField
        type={props.topInputType}
        label={props.topInputLabel}
        variant='outlined'
      />
      <TextField
        type={props.bottomInputType}
        label={props.bottomInputLabel}
        variant='outlined'
      />
      <Button variant='contained'>{props.buttonText}</Button>
    </form>
  )
}
