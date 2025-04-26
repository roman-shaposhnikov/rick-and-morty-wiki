/* eslint-disable no-console */

import { episodeApi, EpisodeInfo } from 'entities/episode'
import {
  Character,
  isApiResponseError,
  selectCurrentPage,
} from 'shared/api/data'

import { characterApi } from '../api'

const { getCharacter, getAllCharacters } = characterApi.endpoints
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

    printEpisodesToConsole(episodes)
  } catch (err) {
    if (isApiResponseError(err)) {
      console.log(err.data.error)
    } else {
      console.log(err)
    }
  }
}

export async function showAll(this: Cli, page: number = 1) {
  try {
    const { info, results: characters } = await this.dispatch(
      getAllCharacters.initiate(page)
    ).unwrap()

    console.table({
      count: info.count,
      pages: info.pages,
      currentPage: selectCurrentPage(info),
    })

    printCharacterListToConsole(characters)
  } catch (err) {
    if (isApiResponseError(err)) {
      console.log(err.data.error)
    } else {
      console.log(err)
    }
  }
}

function printCharacterToConsole(info: Character) {
  console.log('%cInfo:', 'color: brown; font-size: large')

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
  console.log('%cAppeared in:', 'color: brown; font-size: large')

  const normalizedData = Object.fromEntries(
    episodes.map(e => [e.id, e])
  )
  console.table(normalizedData, ['episode', 'name', 'airDate'])
}

function printCharacterListToConsole(characters: Character[]) {
  const normalizedData = Object.fromEntries(
    characters.map(c => [c.id, c])
  )
  console.table(normalizedData, ['name', 'status', 'species'])
}
