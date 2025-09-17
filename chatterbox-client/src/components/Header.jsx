import React from 'react'

function Header({ isDarkMode, onToggleDarkMode }) {
  return (
    <header>
      <h1>Chatterbox</h1>
      <button onClick={() => onToggleDarkMode(!isDarkMode)}>Toggle</button>
    </header>
  )
}

export default Header
