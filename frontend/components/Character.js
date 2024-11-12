import React, { useState } from 'react'

function Character({ data }) {
  const [planetShow, setPlanetShow] = useState(false)
  const toggle = () => setPlanetShow(!planetShow)
  return (
    <div className='character-card' onClick={toggle}>
      <h3 className='character-name'>{data.name}</h3>
      {planetShow && <p>Planet: <span className='character-planet'>{data.homeworld.name}</span></p>}
    </div>
  )
}

export default Character