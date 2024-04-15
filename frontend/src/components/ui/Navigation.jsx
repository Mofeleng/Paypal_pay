import React from 'react'
import '../../styles/Navigation.css'

function Navigation() {
  return (
    <nav className="navbar">
    <div className="navbar-logo">Pay app</div>
    <ul className="navbar-links">
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
  </nav>
  )
}

export default Navigation