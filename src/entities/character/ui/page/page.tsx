import cn from 'classnames'
import {
  characterApi,
  CharacterStatus,
  TEMPLATE_CHARACTER,
} from 'entities/character'
import { episodeApi } from 'entities/episode'
import PT from 'prop-types'
import { ReactNode } from 'react'
import { Loader } from 'shared/ui'

import { EpisodesList } from './episodes-list'
import tmpImage from './ghost.jpg'
import s from './style.module.css'

export function Page({
  id,
  children,
}: {
  id: number
  children: ReactNode
}) {
  const {
    data: info = TEMPLATE_CHARACTER,
    isLoading: isLoadingInfo,
  } = characterApi.useGetCharacterQuery(Number(id))

  const { data: episodes = [], isLoading: isLoadingEpisodes } =
    episodeApi.useGetEpisodesByUrlsQuery(info.episode, {
      skip: isLoadingInfo,
    })

  if (isLoadingInfo) {
    return <Loader />
  }

  return (
    <main className={cn('page', s.main)}>
      <div className={s.header}>
        <img src={info.image || tmpImage} alt={info.name} />

        <section>
          <div>
            <h2>{info.name}</h2>
            <CharacterStatus
              status={info.status}
              species={info.species}
            />
          </div>

          <div>
            <div>Gender: {info.gender}</div>
            <div>Origin Location: {info.origin.name}</div>
            <div>Current Location: {info.location.name}</div>
          </div>

          {children ? (
            <ul className={s.actions}>{children}</ul>
          ) : null}
        </section>
      </div>
      <h3>Appeared in:</h3>
      {isLoadingEpisodes ? (
        <Loader />
      ) : (
        <EpisodesList items={episodes} />
      )}
    </main>
  )
}

Page.propTypes = {
  id: PT.number.isRequired,
}
