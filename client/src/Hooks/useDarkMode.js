import React, { useEffect } from 'react'

import useLocalStorage from './useLocalStorage'

const useDarkMode = () => {
  const [enable, setEnable] = useLocalStorage('darkMode')

  useEffect(() => {
    if (enable === true) {
      document.body.classList.add('dark-mode')
    } else {
      document.body.classList.remove('dark-mode')
    }
  }, [enable])

  return [enable, setEnable]
}

export default useDarkMode
