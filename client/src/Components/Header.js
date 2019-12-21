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
    <h1>Toggle Dark Mode:</h1>
      <div className='dark-mode__toggle'>
        <div
          onClick={toggleMode}
          className={enable ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </div>
  )
}

export default Header
