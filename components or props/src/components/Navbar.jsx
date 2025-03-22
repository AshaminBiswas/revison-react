import React from 'react'

function Navbar() {
  return (
    <div>
      <nav className='navbar bg-green-600 flex justify-between px-5 h-16 items-center'>
        <a className='navbar-brand text-2xl'>Navbar</a>
        <ul className='nav flex gap-4'>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
