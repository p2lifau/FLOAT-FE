import React from 'react'
import logo from './jordan1-BIG.webp'
const Navbar = () => {
  return (
      <div>
       <nav className='navbar'>
       <h2 className='float-logo'>FLOAT</h2>
       <div className='nav-links'>
       <a href='#'>Home</a>
       <a href='#'>Test</a>
       </div>
      </nav>
      <img  className="goat-header"src= {logo} alt="" />
      </div>
  )
}

export default Navbar