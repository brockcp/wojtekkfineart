import React from 'react'
import { Link } from 'react-router-dom'
import '../style.css'

const Nav=()=>(
  <footer>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/animals'>Animals</Link></li>
        <li><Link to='/landscapes'>Landscapes</Link></li>
        <li><Link to='/people'>People</Link></li>
        <li><Link to='/sculptures'>Sculptures</Link></li>
        <li><Link to='/flowers'>Flowers</Link></li>
        <li><Link to='/photos'>Photos</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
      </ul>
    </nav>
  </footer>
)

export default Nav
