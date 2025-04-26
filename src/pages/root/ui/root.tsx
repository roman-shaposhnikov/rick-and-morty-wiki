import { Link } from 'react-router-dom'

export function Root() {
  return (
    <>
      <h1>Root page</h1>
      <Link to='/'>/</Link>
      <Link to='/signup'>/signup</Link>
      <Link to='/signin'>/signin</Link>
      <Link to='/favorites'>/favorites</Link>
      <Link to='/history'>/history</Link>
      <Link to='/search'>/search</Link>
      <Link to='/character/:id'>/character</Link>
    </>
  )
}
