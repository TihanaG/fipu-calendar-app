import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { SidebarData } from './SidebarData'
import "./Sidebar.css"
import { IconContext } from 'react-icons'

function Sidebar() {

  return (
    <div className="left-sidebar">
    <IconContext.Provider value={{ fontSize: '100px' }}>
    <nav className='sidebar-menu'>
      <ul className="sidebar-menu-items">
        <li className="sidebar-logo">
          <Link to="/" className='logo-img'>
          <img
            src="images/fipu-calendar-logo_v2.svg"
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
                className={({ isActive }) => isActive ? 'active sidebar-text' : 'sidebar-text'}
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
    </div>
  )
}

export default Sidebar