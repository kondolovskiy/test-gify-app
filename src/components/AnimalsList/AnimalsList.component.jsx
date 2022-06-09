import React from "react"
import { ANIMALS_LIST } from "../../constants/animals"
import './AmimalList.styles.css'

const AnimalList = ({ onAnimalSelected }) => {
  return (
    <header className="select-header">
      <div>
        Show me the:
        {ANIMALS_LIST.map(animal => (
          <button key={animal.key} onClick={() => onAnimalSelected(animal.key)}>
            {animal.title}
          </button>
        ))}
      </div>
      
    </header>
  )
}

export default AnimalList