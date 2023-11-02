import React, { useState } from 'react'
import navlogo1 from '../assets/mastlogo/naruto.png'
import navlogo2 from '../assets/mastlogo/aot.png'
import navlogo3 from '../assets/mastlogo/bc.png'
import navlogo4 from '../assets/mastlogo/dn3.png'
import navlogo5 from '../assets/mastlogo/ds.png'
import navlogo6 from '../assets/mastlogo/jk.png'
import navlogo7 from '../assets/mastlogo/mha.png'
import navlogo8 from '../assets/mastlogo/op.png'
import navlogo9 from '../assets/mastlogo/opm.png'
import navlogo10 from '../assets/mastlogo/vs2.png'
import { Link } from 'react-router-dom'
import Productdata from '../Data/ProductData'
import Product from './Product'



//new change
//change 2
const Navbar2 = () => {
    const[active, SetActive]= useState("");
    

  return (
      <>
    <nav className='navbar_two'>
        <div>
            <Link className='link' to={"/product"} onClick={()=> SetActive("Naruto")}>
                <img src={navlogo1} alt=""/>
            </Link>
             
        </div>
        <div >
            <Link className='link' to={"/product"}>
                <img src={navlogo2} alt="" />
            </Link>
             
        </div>
        <div>
            <Link className='link' to={"/product"}>
                <img src={navlogo3} alt=""/>
            </Link>
            
        </div>
        <div>
            <Link className='link' to={"/product"}>
                <img src={navlogo4} alt=""/>
            </Link>
            
        </div>
        <div>
            <Link className='link' to={"/product"}>
                <img src={navlogo5} alt=""/>
            </Link>
            
        </div>
        <div>
            <Link className='link' to={"/product"}>
                <img src={navlogo6} alt=""/>
            </Link>
             
        </div>
        <div>
            <Link className='link' to={"/product"}>
                <img className='mha' src={navlogo7} alt="" />
            </Link>
             
        </div>
        <div >
            <Link className='link' to={"/product"}>
                 <img src={navlogo8} alt=""/>
            </Link>
               
        </div>
        <div>
            <Link className='link' to={"/product"}>
                <img src={navlogo10} alt=""/>
            </Link>
                
        </div>
    </nav>
    </>
  )
}

export default Navbar2