import React from 'react'
import useDarkMode from '../Hooks/useDarkMode'

const Header = () => {
  const [enable, setEnable] = useDarkMode(false)

  const toggleMode = e => {
    e.preventDefault()
    setEnable(!enable)
  }

  return (
    <div className='header'>
      <div className='dark-mode__toggle'>
        <div
          onClick={toggleMode}
          className={enable ? 'toggle toggled' : 'toggle'}
        />
      </div>
      <div>
        <h1>Women's World Cup Players 2019</h1>
        <h2>WorldWide Ranking by Google Search Interest</h2>
        <p>For the period of June 2019 - July 2019</p>
      </div>
    </div>
  )
}

export default Header
