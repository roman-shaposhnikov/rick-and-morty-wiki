import './styles/global.css'

import { Loader } from 'shared/ui'

import { useInit } from './hooks'
import { Router } from './router'

export function App() {
  const isInitialized = useInit()

  const loader = (
    <div className='absCentered'>
      <Loader />
    </div>
  )

  return !isInitialized ? loader : <Router />
}
