import React from 'react'
import navlogo1 from '../assets/mastlogo/naruto.png'
import navlogo2 from '../assets/mastlogo/aot.png'
import navlogo3 from '../assets/mastlogo/bc.png'
import navlogo4 from '../assets/mastlogo/dn.png'
import navlogo5 from '../assets/mastlogo/ds.png'
import navlogo6 from '../assets/mastlogo/jk.png'
import navlogo7 from '../assets/mastlogo/mha.png'
import navlogo8 from '../assets/mastlogo/op.png'
import navlogo9 from '../assets/mastlogo/opm.png'
import navlogo10 from '../assets/mastlogo/vs2.png'


const Navbar2 = () => {
  return (
    <nav className='navbar_two'>
        <div>
            <img src={navlogo1} alt="" />
        </div>
        <div>
            <img src={navlogo2} alt="" />
        </div>
        <div>
            <img src={navlogo3} alt="" />
        </div>
        <div>
            <img src={navlogo4} alt="" />
        </div>
        <div>
            <img src={navlogo5} alt="" />
        </div>
        <div>
            <img src={navlogo6} alt="" />
        </div>
        <div>
            <img className='mha' src={navlogo7} alt="" />
        </div>
        <div>
            <img src={navlogo8} alt="" />
        </div>
        <div>
            <img src={navlogo10} alt="" />
        </div>
    </nav>
  )
}

export default Navbar2