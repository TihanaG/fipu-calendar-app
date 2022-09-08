import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { SidebarData } from './SidebarData'
import "./Sidebar.css"
import { IconContext } from 'react-icons'

function Sidebar() {

  return (
    <>
    <IconContext.Provider value={{ fontSize: '100px' }}>
     {/* <Navbar /> */}
     <div className='navbar'>
        <Link to="#" className='menu-bars'>
            <h5>Tihana Glavaš</h5>
        </Link>
     </div>
     <nav className='nav-menu'>
      <ul className="nav-menu-items">
        <li className="navbar-toggle">
          <Link to="#" className='logo-img'>
          <img
            src="images/fipu-calendar-logo.svg"
            alt="fipu logo"
          />
          </Link>
        </li>
        {SidebarData.map((item, index) => {
          return (
            <li>
              <NavLink
                to={item.path}
                key={index}
                className={({ isActive }) => isActive ? 'active nav-text' : 'nav-text'}
              >
                <div className='icon'>{item.icon}</div>
                <div className="link-text">{item.title}</div>
              </NavLink>
            </li>
          )
        })}
      </ul>
     </nav>
     </IconContext.Provider>
    </>
  )
}

export default Sidebar