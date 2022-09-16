import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

function Navbar({ user }) {
  return (
    <div className='navbar'>
        <Link to="#" className='menu-bars'>
          <h5>Hello, {user?.name}</h5>
        </Link>
     </div>
  )
}

export default Navbar