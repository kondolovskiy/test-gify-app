import React, { useState } from 'react';
import AnimalList from './components/AnimalsList/AnimalsList.component';
import AnimalsGifs from './components/AnimalsGifs/AnimalsGifs.component';
import ShowMore from './components/ShowMore/ShowMore.component';
import Loader from './components/Loader/Loader.component';
import { GifsApi, STATES_MAP } from './api/gifs';
import { CONFIG } from './config'
import './App.css'

const api = new GifsApi(CONFIG.apiKey)

function App() {
  const [gifs, setGifs] = useState([])
  const [lastSeatch, setLastSearch] = useState('')

  const handleAnimalSelect = (selectedAnimal) => {
    if (selectedAnimal) {
      api.seatchGifts(selectedAnimal).then(gifs => {
        setGifs(gifs)
      })

      setLastSearch(selectedAnimal)
    }
  }

  const handleShowMore = () => {
    handleAnimalSelect(lastSeatch)
  }

  return (
    <div className="App">
      <AnimalList onAnimalSelected={handleAnimalSelect} />
      {api.state === STATES_MAP.PENDING ? <Loader /> : <AnimalsGifs gifs={gifs} />}
      {api.state === STATES_MAP.RESOLVED && <ShowMore onClick={handleShowMore} />}
    </div>
  );
}

export default App;
