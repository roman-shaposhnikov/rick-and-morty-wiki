import { Character } from 'pages/character'
import { Root } from 'pages/root'
import { Search } from 'pages/search'
import { SignIn } from 'pages/signin'
import { SignUp } from 'pages/signup'
import { lazy, Suspense } from 'react'
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Loader } from 'shared/ui'
import { Header } from 'widgets/header'

import { withAuthentication } from './providers/auth'

const History = withAuthentication(
  lazy(() => import('pages/history'))
)

const Favorites = withAuthentication(
  lazy(() => import('pages/favorites'))
)

export function Router() {
  return (
    <HashRouter>
      <Header />

      <Suspense
        fallback={
          <div className='absCentered'>
            <Loader />
          </div>
        }
      >
        <Routes>
          <Route path='/' element={<Root />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/favorites' element={<Favorites />} />
          <Route path='/history' element={<History />} />
          <Route path='/search' element={<Search />} />

          <Route path='/character'>
            <Route index element={<Navigate to={'/'} />} />
            <Route path=':id' element={<Character />} />
          </Route>
        </Routes>
      </Suspense>
    </HashRouter>
  )
}
