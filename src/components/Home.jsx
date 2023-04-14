import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import img1 from '../assets/naruto.jpg'
import img2 from '../assets/117042.jpg'
import img3 from '../assets/381127.jpg'
import img4 from '../assets/381197.jpg'
import img5 from '../assets/381213.jpg'
import img6 from '../assets/narutoFont.png'
import begin from '../assets/begin1.png'
import op from '../assets/op.jpg'
import op2 from '../assets/kakashi.jpg'
import tan from '../assets/tanjiro.jpg'
import itachi from '../assets/itachi.jpg'
import zen from '../assets/zen.jpg'



const Home = () => {
  return (
    <>
        <div className="home1">
        <Carousel className='slides'
        autoPlay
        infiniteLoop 
        interval={2000} 
        showThumbs={false} 
        showStatus={false}
        showArrows={false}>
            
            <div className='carousel'>
                <img src={img1} alt="Item1" />
            </div>
            <div className='carousel'>
                <img src={img2} alt="Item2" />
                
            </div>
            <div className='carousel'>
                <img src={img3} alt="Item3" />   
            </div>
            <div className='carousel'>
                <img src={img4} alt="Item3" />   
            </div>
            <div className='carousel'>
                <img src={img5} alt="Item3" />   
            </div>
        </Carousel>
        </div>

        <div className="home2">
            <div>
                <img src={img6} alt="offers" />
            </div>
            <main>
                <h5>Choose your world</h5>
                <h2>And get exciting offers</h2>
            </main>
            <container className="container">
                <img src={begin} alt="" />
            </container>
        </div>

        <div className="home3">
        <Carousel className='slide_two'
        autoPlay
        infiniteLoop 
        interval={2000} 
        showThumbs={false} 
        showStatus={false}
        showArrows={false}
        showIndicators={false}>
            
            <div className='carousel_two'>
                <img className='images' src={op} alt="Item1" />
            </div>
            <div className='carousel_two'>
                <img className='images' src={op2} alt="Item2" />
                
            </div>
            <div className='carousel_two'>
                <img className='images' src={tan} alt="Item3" />   
            </div>
            <div className='carousel_two'>
                <img className='images' src={itachi} alt="Item3" />   
            </div>
            <div className='carousel_two'>
                <img className='images' src={zen} alt="Item3" />   
            </div>
        </Carousel>
        </div>
    </>
  )
}

export default Home