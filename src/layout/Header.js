import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'

const Header = () => (
  <header>
    <div className="logo">
      <Link to='/'>Wojtekk Fine Art</Link>
    </div>
  </header>
)

export default Header
