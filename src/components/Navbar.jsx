import React from 'react'
import logo from '../assets/mast.png';
const Navbar = () => {
  return (
    <nav>
        <div className='logo'>
            <img src={logo} alt="logo" />
        </div>
    </nav>
  )
}

export default Navbar