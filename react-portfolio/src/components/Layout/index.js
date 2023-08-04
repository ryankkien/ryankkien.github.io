import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/'
import './index.scss'
import Loader from 'react-loaders'

const Layout = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Simulate the effect of the window.onload event
    setIsLoaded(true)
  }, [])

  return (
    <div className="App">
      <Sidebar />
      <div className={`page ${isLoaded ? 'show-content' : ''}`}>
        <Outlet />
        <br />
      </div>
    </div>
  )
}

export default Layout
