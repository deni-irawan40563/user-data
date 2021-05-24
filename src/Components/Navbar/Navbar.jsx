import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
      <h1><Link to="/">Front-End Developer List</Link></h1>
    </nav>
  )
}
