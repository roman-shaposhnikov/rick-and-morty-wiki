import { SignInForm } from 'features/signin'
import { Link, useNavigate } from 'react-router-dom'

export function SignIn() {
  const navigate = useNavigate()

  return (
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
  )
}
