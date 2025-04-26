/* eslint-disable no-console */

import { episodeApi, EpisodeInfo } from 'entities/episode'
import { Character } from 'shared/api/data'

import { characterApi } from '../api'

const { getCharacter } = characterApi.endpoints
const { getEpisodesByUrls } = episodeApi.endpoints

export async function show(this: Cli, id: number) {
  try {
    const character = await this.dispatch(
      getCharacter.initiate(id)
    ).unwrap()
    printCharacterToConsole(character)

    const episodes = await this.dispatch(
      getEpisodesByUrls.initiate(character.episode)
    ).unwrap()

    console.log('Appeared in:')
    printEpisodesToConsole(episodes)
  } catch (err: any) {
    console.log(err.data.error!)
  }
}

function printCharacterToConsole(info: Character) {
  console.table({
    name: info.name,
    status: info.status,
    species: info.species,
    type: info.type,
    gender: info.gender,
    originLocation: info.origin.name,
    currentLocation: info.location.name,
    imageUrl: info.image,
  })
}

function printEpisodesToConsole(episodes: EpisodeInfo[]) {
  console.table(episodes, ['episode', 'name', 'airDate'])
}
