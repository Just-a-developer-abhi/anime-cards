import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/mast.png';
const Navbar = () => {
  return (
    <nav>
          <div className="left">
              <Link className='logo_link' to={"/"}>
                {/* <img src={logo} alt="logo" /> */}
                Logo
              </Link>
          </div>
          <div className="mid">
              <div>
                <Link to={"/"}>
                    Home
                </Link>
              </div>
              <div>
                <Link to={"/"}>
                    Sale
                </Link>
              </div>
              <div>
                <Link to={"/"}>
                    About Us
                </Link>
              </div>
              <div>
                <Link to={"/"}>
                    Contact US
                </Link>
              </div>  
          </div>
          <div className="right">

          </div>
         
          
            
        
    </nav>
  )
}

export default Navbar