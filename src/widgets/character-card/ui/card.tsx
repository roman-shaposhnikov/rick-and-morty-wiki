import { CharacterCard } from 'entities/character'
import { userModel } from 'entities/user'
import { FavoriteButton } from 'features/add-to-favorite'
import { TelegramShareButton } from 'features/share-in-telegram'
import { useSelector } from 'react-redux'
import { Character } from 'shared/api/data'
import { useFeatureFlags } from 'shared/api/feature-flags'

export function Card(props: Character) {
  const isSignedIn = useSelector(userModel.selectors.isSignedIn)

  const { isTelegramShareEnabled } = useFeatureFlags()

  const shareUrl = encodeURI(
    `${window.location.origin}/rick-and-morty-wiki/character/${props.id}`
  )

  return (
    <CharacterCard info={props}>
      {isSignedIn ? <FavoriteButton id={props.id} /> : null}
      {isTelegramShareEnabled ? (
        <TelegramShareButton url={shareUrl} text='Share' />
      ) : null}
    </CharacterCard>
  )
}
