import { Character } from 'pages/character'
import { Favorites } from 'pages/favorites'
import { History } from 'pages/history'
import { Root } from 'pages/root'
import { Search } from 'pages/search'
import { SignIn } from 'pages/signin'
import { SignUp } from 'pages/signup'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { Header } from 'widgets/header'

export function Router() {
  return (
    <HashRouter>
      <Header />

      <Routes>
        <Route path='/' element={<Root />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/history' element={<History />} />
        <Route path='/search' element={<Search />} />

        <Route path='/character' element={<Character />}>
          <Route index element={<Character />} />
          <Route path=':id' element={<Character />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}
