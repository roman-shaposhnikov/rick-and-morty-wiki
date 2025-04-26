import { ReactNode, useMemo } from 'react'
import { createPortal } from 'react-dom'

import s from './style.module.css'

interface Props {
  children: ReactNode
  close?: () => void
}

export function Modal(props: Props) {
  const container = useMemo(
    () => document.querySelector('#modalRoot'),
    []
  )
  return createPortal(
    <div className={s.modal} onClick={props.close}>
      {props.children}
    </div>,
    container!
  )
}
