import React from 'react'

import axios from 'axios'
import PlayerCard from './Components/PlayerCard'
import Header from './Components/Header'

import './App.css'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      players: []
    }
  }

  componentDidMount () {
    console.log(this.state)
    axios
      .get(`http://localhost:5000/api/players`)
      .then(res => {
        const playerInfo = res.data
        console.log(res.data)
        this.setState({
          players: playerInfo
        })
      })
      .catch(err => console.log('Error: data not returned from server', err))
  }

  render () {
    console.log(
      'Players data after render method is called',
      this.state.players
    )

    return (
      <container className='App'>
        <Header />
        <div className='text-block'>
          <h1>Women's World Cup Players 2019</h1>
          <h2>WorldWide Ranking by Google Search Interest</h2>
          <p>For the period of June 2019 - July 2019</p>
        </div>
        <section className='body'>
          {this.state.players.map(player => {
            return (
              <PlayerCard
                key={player.id}
                id={player.id}
                playerName={player.name}
                playerCountry={player.country}
              />
            )
          })}
        </section>
        <section className='footer'>
          <p>
            <a href='https://iconscout.com/icon/soccer-8' target='_blank'>
              Soccer Icon
            </a>
          </p>
          <p>by</p>
          <p>
            <a href='https://iconscout.com/contributors/aomam'>AomAm .</a>
          </p>
          <p>on</p>
          <p>
            <a href='https://iconscout.com'>Iconscout</a>
          </p>
        </section>
      </container>
    )
  }
}

export default App
