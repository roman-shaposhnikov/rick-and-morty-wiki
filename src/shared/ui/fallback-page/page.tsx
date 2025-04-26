import s from './style.module.css'

export function Page() {
  const rootPath = encodeURI(
    `${window.location.origin}${import.meta.env.BASE_URL}`
  )

  return (
    <main className={s.main}>
      <h3>
        It looks like an error has occurred,
        <br />
        please try to reload or go to the main page
      </h3>
      <a href={rootPath} className={s.link}>
        Go to main page
      </a>
    </main>
  )
}
