import React from 'react'
import shoes from '../assets/shoes.png'

const Card = ({productData}) => {
  console.log(productData);

  return (
    <>
    <div className='product'>
    {productData.map((currentElem)=>{
         return (
           <>   
        <div className="container" key={currentElem.id}>
            <div className="card">
                <div className="imgBx">
                    <img src={currentElem.image} alt="shoes" />
                </div>
                <div className="contentBx">
                  <h2>{currentElem.name}</h2>
                  <div className="size">
                    <h3>Size :</h3>
                    <span>S</span>
                    <span>M</span>
                    <span>L</span>
                    <span>XL</span>
                  </div>
                  <div className="color">
                    <h3>Price :</h3>
                    <span>{currentElem.price}</span>
                  </div>
                  <a href="#">Buy Now</a>
                </div>
            </div>
    </div>
  </>
  );
      })}
      </div>
    </>
  )
   
}

export default Card