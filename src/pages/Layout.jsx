import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className='pt-32 pb-14'>
        <div className='w-10/12 m-auto'>
            <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Layout;
