import { CharacterCard } from 'entities/character'
import { userModel } from 'entities/user'
import { FavoriteButton } from 'features/add-to-favorite'
import { TelegramShareButton } from 'features/share-in-telegram'
import { useSelector } from 'react-redux'
import { Character } from 'shared/api/data'
import { useFeatureFlags } from 'shared/lib/hooks'

export function Card(props: Character) {
  const isSignedIn = useSelector(userModel.selectors.isSignedIn)

  const { isTelegramShareEnabled } = useFeatureFlags()

  const shareUrl = encodeURI(
    `${window.location.origin}${import.meta.env.BASE_URL}character/${
      props.id
    }`
  )

  return (
    <CharacterCard info={props}>
      {isSignedIn ? <FavoriteButton id={props.id} /> : null}
      {isTelegramShareEnabled ? (
        <TelegramShareButton
          url={shareUrl}
          text='Share'
          description={props.name}
        />
      ) : null}
    </CharacterCard>
  )
}
