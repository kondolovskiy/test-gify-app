import React from "react"
import { Gif } from '@giphy/react-components'
import './AnimalsGifs.styles.css'

const AnimalsGifs = ({ gifs }) => {

  if(!Boolean(gifs.length)) {
    return <h3 className="empty-message">Please, select the animal</h3>
  }

  return (
    <div className="gifs-grid">
      {gifs.map(gif => (
        <Gif key={gif.id} gif={gif} width={300} height={300} />
      ))}
    </div>
  )
}

export default AnimalsGifs