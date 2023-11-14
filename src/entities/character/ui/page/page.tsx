import { CircularProgress } from '@mui/material'
import cn from 'classnames'
import {
  characterApi,
  CharacterStatus,
  TEMPLATE_CHARACTER,
} from 'entities/character'
import {
  BASE_URL_EPISODE,
  episodeApi,
  EpisodeInfo,
} from 'entities/episode'

import tmpImage from './ghost.jpg'
import s from './style.module.css'

export function Page({ id }: { id: number }) {
  const {
    data: info = TEMPLATE_CHARACTER,
    isLoading: isLoadingInfo,
  } = characterApi.useGetCharacterQuery(Number(id))

  const ids = info.episode.map(e => +e.slice(BASE_URL_EPISODE.length))

  const { data: episodes = [], isLoading: isLoadingEpisodes } =
    episodeApi.useGetEpisodesQuery(ids, {
      skip: isLoadingInfo,
    })

  if (isLoadingInfo) {
    return (
      <div className={s.loader}>
        <CircularProgress />
      </div>
    )
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
        </section>
      </div>
      <h3>Appeared in:</h3>
      {isLoadingEpisodes ? (
        <div className={s.loader}>
          <CircularProgress />
        </div>
      ) : (
        <EpisodesList items={episodes} />
      )}
    </main>
  )
}

function EpisodeItem(props: EpisodeInfo) {
  return (
    <li style={{ display: 'flex', justifyContent: 'space-between' }}>
      <span>
        {props.episode} - {props.name}
      </span>
      <span>{props.airDate}</span>
    </li>
  )
}

function EpisodesList({ items }: { items: EpisodeInfo[] }) {
  return (
    <ul>
      {items.map(e => (
        <EpisodeItem key={e.id} {...e} />
      ))}
    </ul>
  )
}
