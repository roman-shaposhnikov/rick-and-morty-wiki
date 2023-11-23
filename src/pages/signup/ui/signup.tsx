import { userModel } from 'entities/user'
import { SignUpForm } from 'features/signup'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { Loader, Modal } from 'shared/ui'

export function SignUp() {
  const navigate = useNavigate()
  const isAuthenticating = useSelector(
    userModel.selectors.isAuthenticating
  )

  return (
    <>
      <main className='page authPage'>
        <h1>Sign Up</h1>
        <SignUpForm
          handleSignedUp={() => {
            navigate('/')
          }}
        />
        <Link to={'/signin'}>
          Already have an account? Just Sign In!
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
