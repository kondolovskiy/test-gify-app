import { GiphyFetch } from '@giphy/js-fetch-api'

export const STATES_MAP = {
  PENDING: 'PENDING',
  RESOLVED: 'RESOLVED'
}

export class GifsApi {
  constructor(apiKey) {
    this.gf = new GiphyFetch(apiKey)
    this.state = ''
  }

  async seatchGifts(searchString, limit = 6) {
    const gifs = []
  
    this.state = STATES_MAP.PENDING

    for(let i = 0; i < limit; i++) {
      try {
        const { data: gif } = await this.gf.random({ tag: searchString, type: 'gifs' })
        gifs.push(gif)
      } catch (e) {
        console.error(e)
      }
    }

    this.state = STATES_MAP.RESOLVED
  
    return gifs
  }
}