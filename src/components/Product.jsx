import { Grid } from '@material-ui/core';
import React, { useState } from 'react'
import Card from '../components/Card'
import Productdata from '../Data/ProductData'

const Product = ({productData, index}) => {
  //  const [productData, setProductData] = useState(Productdata);

  return (
    <div className='productCard'>
      {productData[index].map(item=> (
        <div className="card_row">
            <Card productData={item}/>
        </div>  
      ))}   
    </div>
   )
}

export default Product