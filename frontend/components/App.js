import React, {useEffect, useState} from 'react'
import Character from './Character'

const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

function App() {
  // ❗ Create state to hold the data from the API
const [characters, setCharacters] = useState([]);
  // ❗ Create effects to fetch the data and put it in state
useEffect(() => {
  const fetchData = async () => {
    try {
      const [peopleResponse, planetsResponse] = await Promise.all([
        fetch(urlPeople),
        fetch(urlPlanets),
      ]);
      const peopleData = await peopleResponse.json();
      const planetsData = await planetsResponse.json();
      const combinedData = peopleData.map(character => {
          const homeworldData = planetsData.find(planet => planet.id === character.homeworld);
        return {
          ...character, 
          homeworld: homeworldData
        }
      });
      setCharacters(combinedData);
    } catch (error) {
      console.error('Error fetching data:', error); 
    }
  };
  fetchData();
}, [])
  
  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      {/* ❗ Map over the data in state, rendering a Character at each iteration */}
    
      {
characters.map(character => <Character key={character.id} data={character} /> )
}
    </div>
  )
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
