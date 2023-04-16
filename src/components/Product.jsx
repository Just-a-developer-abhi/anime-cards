import React from 'react'
import shoes from '../assets/shoes.png'

const Product = () => {
  return (
    <div className='product'>
        <div className="container">
            <div className="card">
                <div className="imgBx">
                    <img src={shoes} alt="shoes" />
                </div>
            </div>
        </div>

    </div>
  )
}

export default Product