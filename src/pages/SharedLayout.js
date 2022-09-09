import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

function Home() {
  return (
    <>
    <Sidebar />
    <Navbar />
    {/* See Home.js */}
    <Outlet />
    </>
  )
}

export default Home