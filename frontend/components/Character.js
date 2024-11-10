src/Character.js
import React, {useState} from 'react'

function Character({character}) { // ❗ Add the props
  // ❗ Create a state to hold whether the homeworld is rendering or not
  const [showHomeworld, setShowHomeworld] = useState(false); 
  const toggleHomeworld = () => {
    
  // ❗ Create a "toggle" click handler to show or remove the homeworld
  return (
    <div>
      {character.name}
      Date of Birth {character.birth_year}
      {setShowHomeworld(!showHomeworld)}
      {showHomeworld ? 'Hide Homeworld' : 'Show Homeworld'}
      {showHomeworld && character.homeworld && (
        `Homeworld: ${character.homeworld.name}`
      )}
    </div>
  )
}

export default Character