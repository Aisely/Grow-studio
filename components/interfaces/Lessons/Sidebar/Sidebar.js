import React from 'react'
import Weeks from './Weeks/Weeks'

const Sidebar = () => {
  return (
    <nav className=''>
        <div className='h-screen border-r w-80  border-white border-opacity-10'>
          <div><h3 className='text-xl font-semibold py-6 px-5 border-b border-white border-opacity-10'>Course Content</h3></div>
          <div className='h-full overflow-y-auto'>
            <Weeks />
          </div>
        </div>
    </nav>
  )
}

export default Sidebar