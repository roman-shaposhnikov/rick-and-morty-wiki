import { Button as ButtonMUI } from '@mui/material'
import { userModel } from 'entities/user'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from 'shared/lib/redux'

export function Button() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  return (
    <ButtonMUI
      onClick={() => {
        dispatch(userModel.operations.signout())
          .unwrap()
          .then(() => {
            navigate('/signin')
          })
      }}
      variant='contained'
      color='secondary'
    >
      SIGN OUT
    </ButtonMUI>
  )
}
