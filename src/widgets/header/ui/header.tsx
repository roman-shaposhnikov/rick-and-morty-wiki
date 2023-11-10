import { Link } from 'react-router-dom'

import logo from './assets/logo.svg'
import s from './style.module.css'

export function Header() {
  return (
    <header className={s.header}>
      <img className={s.logo} src={logo} alt='rick and morty logo' />
      <HeaderMenu />
    </header>
  )
}

function HeaderMenu() {
  return (
    <div>
      <Link to={'/signin'}>Sign In</Link>
      <Link to={'/signup'}>Sign Up</Link>
    </div>
  )
}
