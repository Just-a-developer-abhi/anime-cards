import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/mast.png';
import wishlist from '../assets/wishlist1.png';
import cart from '../assets/cart1.png';
import profile from '../assets/profile.png';
import search from '../assets/search.png';
const Navbar = () => {
  return (
    <nav className='navbar'>
          <div className="left">
              <Link className='logo_link' to={"/"}>
                {/* <img src={logo} alt="logo" /> */}
                Logo
              </Link>
          </div>

          <div className="mid">
              <div>
                <Link to={"/"}>
                    <h4 className='mid_heading' >Home</h4>
                </Link>
              </div>
              <div>
                <Link to={"/sale"}>
                    <h4 className='mid_heading'>Sale</h4>
                </Link>
              </div>
              <div>
                <Link to={"/about"}>
                   <h4 className='mid_heading'>About US</h4>
                </Link>
              </div>
              <div>
                <Link to={"/contact"}>
                    <h4 className='mid_heading'>Contact Us</h4>
                </Link>
              </div>  
          </div>

          <div className="right">
              <div>
                <Link className='link1' to={"/wishlist"}>
                    <img className='right_image' src={search} alt="" />
                </Link>
              </div> 
              <div>
                <Link className='link1' to={"/wishlist"}>
                    <img className='right_image' src={wishlist} alt="" />
                </Link>
              </div> 
              <div>
                <Link className='link1' to={"/cart"}>
                    <img className='right_image' src={cart} alt="" />
                </Link>
              </div> 
              <div>
                <Link className='link1' to={"/profile"}>
                    <img className='right_image' src={profile} alt="" />
                </Link>
              </div> 
          </div>
         
          
            
        
    </nav>
  )
}

export default Navbar