import { userModel } from 'entities/user'
import { SignInForm } from 'features/signin'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { Loader, Modal } from 'shared/ui'

export function SignIn() {
  const navigate = useNavigate()
  const isAuthenticating = useSelector(
    userModel.selectors.isAuthenticating
  )

  return (
    <>
      <main className='page authPage'>
        <h1>Sign In</h1>
        <SignInForm
          handleSignedIn={() => {
            navigate('/')
          }}
        />
        <Link to={'/signup'}>
          Don't you have an account? Just Sign Up!
        </Link>
      </main>

      {!isAuthenticating ? null : (
        <Modal>
          <Loader />
        </Modal>
      )}
    </>
  )
}
