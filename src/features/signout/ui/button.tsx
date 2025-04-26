import { Button as ButtonMUI } from '@mui/material'
import { userModel } from 'entities/user'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from 'shared/lib/redux'
import { Loader, Modal } from 'shared/ui'

export function Button() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const isAuthenticating = useSelector(
    userModel.selectors.isAuthenticating
  )

  return (
    <>
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
        disabled={isAuthenticating}
      >
        SIGN OUT
      </ButtonMUI>

      {!isAuthenticating ? null : (
        <Modal>
          <Loader />
        </Modal>
      )}
    </>
  )
}
