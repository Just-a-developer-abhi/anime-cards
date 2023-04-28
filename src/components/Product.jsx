import { Grid } from '@material-ui/core';
import React, { useState } from 'react'
import Card from '../components/Card'
import Productdata from '../Data/ProductData'
import CharacterNav from './CharacterNav';

const Product = ({productData}) => {
    // const [productData, setProductData] = useState(Productdata);

  return (
    <div className='productCard'>
        <div className="card_row">
            <Card productData={productData}/>
        </div>     
    </div>
  )
}

export default Product