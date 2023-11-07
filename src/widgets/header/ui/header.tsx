import { Link } from 'react-router-dom'

import logo from './assets/logo.svg'
import style from './header.module.css'

export function Header() {
  return (
    <header className={style.header}>
      <img
        className={style.logo}
        src={logo}
        alt='rick and morty logo'
      />
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
