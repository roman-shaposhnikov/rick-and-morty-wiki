import { SignUpForm } from 'features/signup'
import { Link, useNavigate } from 'react-router-dom'

export function SignUp() {
  const navigate = useNavigate()

  return (
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
  )
}
