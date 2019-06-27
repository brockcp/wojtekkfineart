import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'

const Nav = () => (
  <footer>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/Animals'>Animals</Link></li>
        <li><Link to='/Landscapes'>Landscapes</Link></li>
        <li><Link to='/People'>People</Link></li>
        <li><Link to='/Sculptures'>Sculptures</Link></li>
        <li><Link to='/Flowers'>Flowers</Link></li>
        <li><Link to='/About'>About</Link></li>
        <li><Link to='/Contact'>Contact</Link></li>
      </ul>
    </nav>
  </footer>
)

export default Nav
