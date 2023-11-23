import { CircularProgress } from '@mui/material'

export function Loader() {
  return (
    <div className='absCentered'>
      <CircularProgress color='primary' size={100} thickness={9} />
    </div>
  )
}
