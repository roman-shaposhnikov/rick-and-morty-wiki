import { Character } from 'pages/character'
import { Root } from 'pages/root'
import { Search } from 'pages/search'
import { SignIn } from 'pages/signin'
import { SignUp } from 'pages/signup'
import { lazy, ReactNode, Suspense } from 'react'
import {
  BrowserRouter,
  HashRouter,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom'
import { Loader } from 'shared/ui'
import { Header } from 'widgets/header'

import { withAuthentication } from './providers/auth'

const History = withAuthentication(
  lazy(() => import('pages/history'))
)

const Favorites = withAuthentication(
  lazy(() => import('pages/favorites'))
)

const RouterProvider = (props: { children: ReactNode }) => {
  return import.meta.env.VITE_IN_PRODUCTION ? (
    <HashRouter>{props.children}</HashRouter>
  ) : (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      {props.children}
    </BrowserRouter>
  )
}

export function Router() {
  return (
    <RouterProvider>
      <Header />

      <Suspense fallback={<Loader />}>
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
    </RouterProvider>
  )
}
