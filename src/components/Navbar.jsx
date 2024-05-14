import React from 'react'
import NavItem from './NavItem'
function Navbar() {
  return (
    < >
        <h2 className='text-3xl p-4 font-semibold font-'>LOGO</h2>
      <ul className='flex gap-4 '>
        
        <NavItem>Home</NavItem>
        <li>Search</li>
        <li>Favorites</li>
        <li>Notifications</li>
      </ul>
      <ul className='flex gap-4 '>
        <li>Logout</li>
        <li>Profile</li>
      </ul>
    </>
  )
}

export default Navbar