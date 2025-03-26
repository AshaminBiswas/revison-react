import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="">
      <ul className='flex gap-5 text-2xl font-bold'>
        <li><NavLink className={(e) => { return e.isActive ? "red" : "" }} to="/">Home</NavLink></li>
        <li><NavLink className={(e) => { return e.isActive ? "red" : "" }} to="/about">About</NavLink></li>
        <li><NavLink className={(e) => { return e.isActive ? "red" : "" }} to="/contact">Contact</NavLink></li>
        <li><NavLink className={(e) => { return e.isActive ? "red" : "" }} to="/service">Service</NavLink></li>
        <li><NavLink className={(e) => { return e.isActive ? "red" : "" }} to="/blog">Blog</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar