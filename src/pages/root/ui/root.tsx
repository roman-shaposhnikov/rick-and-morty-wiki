import { characterApi } from 'entities/character'
import { SearchLine } from 'features/search'
import { CharacterCard } from 'widgets/character-card'

import s from './style.module.css'

export function Root() {
  const { data } = characterApi.useGetRandomCharactersQuery(6)

  return (
    <main className={s.main}>
      <SearchLine />
      <div className={'cardsLayer'}>
        {data?.map(c => (
          <CharacterCard key={c.id} {...c} />
        ))}
      </div>
    </main>
  )
}
