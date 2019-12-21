import React from 'react'

const PlayerCard = props => {
  console.log(props)
  return (
    <section className='player-card'>
      <h3>Name: {props.playerName}</h3>
      <h3>Country: {props.playerCountry}</h3>
    </section>
  )
}

export default PlayerCard
