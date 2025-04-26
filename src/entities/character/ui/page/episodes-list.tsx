import { EpisodeInfo } from 'entities/episode'
import PT from 'prop-types'

const EpisodeInfoPT = {
  id: PT.number.isRequired,
  name: PT.string.isRequired,
  airDate: PT.string.isRequired,
  episode: PT.string.isRequired,
}

export function EpisodesList({ items }: { items: EpisodeInfo[] }) {
  return (
    <ul>
      {items.map(e => (
        <EpisodeItem key={e.id} {...e} />
      ))}
    </ul>
  )
}

EpisodesList.propTypes = {
  items: PT.arrayOf(PT.shape(EpisodeInfoPT)).isRequired,
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

EpisodeItem.propTypes = EpisodeInfoPT
