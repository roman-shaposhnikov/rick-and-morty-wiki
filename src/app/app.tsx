import './styles/global.css'

import { Header } from 'widgets/header'

import { Router } from './router.tsx'

export function App() {
  return (
    <>
      <Header />
      <Router />
    </>
  )
}
