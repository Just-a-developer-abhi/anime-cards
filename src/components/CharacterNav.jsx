import React from 'react'
import { Link } from 'react-router-dom'
import navlogo1 from '../assets/characters/gojo.png'
import navlogo2 from '../assets/characters/goku.png'
import navlogo3 from '../assets/characters/hunter.png'
import navlogo4 from '../assets/characters/Kira.png'
import navlogo5 from '../assets/characters/L.png'
import navlogo6 from '../assets/characters/naruto.png'
import navlogo7 from '../assets/characters/shoto.png'
import navlogo8 from '../assets/characters/tanjiro.png'
import navlogo9 from '../assets/characters/vinland.png'
import navlogo10 from '../assets/characters/yuji.png'

const CharacterNav = () => {
  return (
        <nav className='navbar_two'>
        <div>
            <Link className='link' to={"/product"}>
                <img src={navlogo1} alt="" />
            </Link>
        </div>
        <div>
            <Link className='link' to={"/product"}>
                <img src={navlogo2} alt="" />
            </Link>
        </div>
        <div>
            <Link className='link' to={"/product"}>
                <img src={navlogo3} alt="" />
            </Link>
            
        </div>
        <div>
            <Link className='link' to={"/product"}>
                <img src={navlogo4} alt="" />
            </Link>
            
        </div>
        <div>
            <Link className='link' to={"/product"}>
                <img src={navlogo5} alt="" />
            </Link>
            
        </div>
        <div>
            <Link className='link' to={"/product"}>
                <img src={navlogo6} alt="" />
            </Link>
            
        </div>
        <div>
            <Link className='link' to={"/product"}>
                <img className='mha' src={navlogo7} alt="" />
            </Link>   
        </div>
        <div>
            <Link className='link' to={"/product"}>
                <img src={navlogo8} alt="" />
            </Link>    
        </div>
        <div>
            <Link className='link' to={"/product"}>
                <img src={navlogo10} alt="" />
            </Link> 
        </div>
    </nav>
  )
}

export default CharacterNav