import s from './style.module.css'

export function Page() {
  return (
    <main className={s.main}>
      <h3>
        It looks like an error has occurred, please try to reload or
        go to the main page
      </h3>
      <a className={s.link}>Go to main page</a>
    </main>
  )
}
