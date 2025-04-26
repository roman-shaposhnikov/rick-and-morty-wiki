import { yupResolver } from '@hookform/resolvers/yup'
import { Button, TextField } from '@mui/material'
import { HTMLInputTypeAttribute } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import type { Credentials } from 'shared/api/auth'
import * as yup from 'yup'

import { FieldError } from '../error'
import s from './style.module.css'

type Props = {
  topInputLabel: string
  bottomInputLabel: string

  topInputType: HTMLInputTypeAttribute
  bottomInputType: HTMLInputTypeAttribute

  buttonText: string

  formValidator: yup.ObjectSchema<Credentials, yup.AnyObject>
  handleSubmit: (creds: Credentials) => void
}

export function AuthForm(props: Props) {
  const {
    control,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm<Credentials>({
    mode: 'onChange',
    resolver: yupResolver(props.formValidator),
  })

  const onSubmit: SubmitHandler<Credentials> = data => {
    props.handleSubmit(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
      <div>
        <Controller
          name='username'
          control={control}
          render={({ field }) => (
            <TextField
              type={props.topInputType}
              label={props.topInputLabel}
              variant='outlined'
              {...field}
            />
          )}
        />
        <FieldError
          error={errors.username}
          touched={touchedFields.username}
        />
      </div>

      <div>
        <Controller
          name='password'
          control={control}
          render={({ field }) => (
            <TextField
              type={props.bottomInputType}
              label={props.bottomInputLabel}
              variant='outlined'
              {...field}
            />
          )}
        />
        <FieldError
          error={errors.password}
          touched={touchedFields.password}
        />
      </div>

      <Button type='submit' variant='contained'>
        {props.buttonText}
      </Button>
    </form>
  )
}
