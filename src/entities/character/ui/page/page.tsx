import { CircularProgress } from '@mui/material'
import cn from 'classnames'
import {
  characterApi,
  CharacterStatus,
  TEMPLATE_CHARACTER,
} from 'entities/character'
import { episodeApi } from 'entities/episode'
import { FavoriteButton } from 'features/add-to-favorite'
import PT from 'prop-types'

import { EpisodesList } from './episodes-list'
import tmpImage from './ghost.jpg'
import s from './style.module.css'

export function Page({ id }: { id: number }) {
  const {
    data: info = TEMPLATE_CHARACTER,
    isLoading: isLoadingInfo,
  } = characterApi.useGetCharacterQuery(Number(id))

  const { data: episodes = [], isLoading: isLoadingEpisodes } =
    episodeApi.useGetEpisodesByUrlsQuery(info.episode, {
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

          <ul className={s.actions}>
            <FavoriteButton id={info.id} />
          </ul>
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

Page.propTypes = {
  id: PT.number.isRequired,
}
