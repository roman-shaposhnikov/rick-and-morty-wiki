import { Favorite, History } from '@mui/icons-material'
import { Button } from '@mui/material'
import { userModel } from 'entities/user'
import { SignOutButton } from 'features/signout'
import { useSelector } from 'react-redux'
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
  const isSignedIn = useSelector(userModel.selectors.isSignedIn)

  return (
    <div className={s.menu}>
      {isSignedIn ? <UserMenu /> : <GuestMenu />}
    </div>
  )
}

function UserMenu() {
  return (
    <>
      <Link to={'/favorites'}>
        <Favorite />
      </Link>
      <Link to={'/favorites'}>
        <History />
      </Link>
      <SignOutButton />
    </>
  )
}

function GuestMenu() {
  return (
    <>
      <Link to={'/signin'}>
        <Button variant='contained'>Sign In</Button>
      </Link>

      <Link to={'/signup'}>
        <Button variant='contained'>Sign Up</Button>
      </Link>
    </>
  )
}
