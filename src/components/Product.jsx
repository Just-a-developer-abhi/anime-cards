import React, { useState } from 'react'
import Card from '../components/Card'
import Productdata from '../Data/ProductData'

const Product = () => {
    const [productData, setProductData] = useState(Productdata);

  return (
    <div className='productCard'>
        <div className="card_row">
            <Card productData={productData}/>
        </div>     
    </div>
  )
}

export default Product