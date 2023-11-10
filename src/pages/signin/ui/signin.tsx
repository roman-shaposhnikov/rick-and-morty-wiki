import { SignInForm } from 'features/signin'
import { Link } from 'react-router-dom'

export function SignIn() {
  return (
    <main className='page authPage'>
      <h1>Sign In</h1>
      <SignInForm />
      <Link to={'/signup'}>
        Don't you have an account? Just Sign Up!
      </Link>
    </main>
  )
}
