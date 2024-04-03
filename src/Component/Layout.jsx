import React from 'react'
import ResponsiveDrawer from './Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div >
      <ResponsiveDrawer outlet={<Outlet/>} />
    </div>
  )
}

export default Layout
