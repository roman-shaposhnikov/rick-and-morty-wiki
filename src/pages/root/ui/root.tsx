import { characterApi, CharacterCard } from 'entities/character'

import s from './style.module.css'

export function Root() {
  const { data } = characterApi.useGetRandomCharactersQuery(6)

  return (
    <main className={s.main}>
      <div className={s.content}>
        {data?.map(c => (
          <CharacterCard key={c.id} info={c} />
        ))}
      </div>
    </main>
  )
}
