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

    const [productData, setProductData] = useState(Productdata);
    const handleButton = (animeName) =>{
        const updatedList = Productdata.filter((currentElement) => {
        return currentElement.anime_name === animeName;
    });
        setProductData(updatedList);
    };
    

  return (
      <>
    <nav className='navbar_two'>
        <div>
             <img src={navlogo1} alt="" onClick={()=>handleButton("Naruto")}/>
        </div>
        <div>
             <img src={navlogo2} alt="" onClick={()=>handleButton("AOT")}/>
        </div>
        <div>
            <img src={navlogo3} alt="" onClick={()=>handleButton("Black Clover")}/>
        </div>
        <div>
            <img src={navlogo4} alt="" onClick={()=>handleButton("Death Note")}/>
        </div>
        <div>
            <img src={navlogo5} alt="" onClick={()=>handleButton("Demon Slayer")}/>
        </div>
        <div>
             <img src={navlogo6} alt="" onClick={()=>handleButton("Jujutsu Kaisen")}/>
        </div>
        <div>
             <img className='mha' src={navlogo7} alt="" onClick={()=>handleButton("MHA")}/>
        </div>
        <div>
                <img src={navlogo8} alt="" onClick={()=>handleButton("OnePiece")}/>
        </div>
        <div>
                <img src={navlogo10} alt="" onClick={()=>handleButton("Vinland Saga")}/>
        </div>
    </nav>
    <Product productData={productData}/>
    </>
  )
}

export default Navbar2