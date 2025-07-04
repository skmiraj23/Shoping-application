import React from 'react'
import './hero.css'
import Carousel from 'react-bootstrap/Carousel';
import menfh from "./../../assets/mens_fashion.jpg"
import womenfh from "./../../assets/womens_fashion.avif"
import jwell from "./../../assets/jewellery.jpg"


const Hero = () => {
  return (
    <>
    <div className="hero">
     <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={menfh}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>Mens Fashion</h5>
          <p>Style That Speaks Volumes</p>
          <h3>50-70 % OFF</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={womenfh}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Womens Fashion</h5>
          <p>Elegance in Every Thread</p>
          <h3>UP TO 80 % OFF</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={jwell}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Jewellery</h5>
          <p>
          Adorable All Day, Every Day
          </p>
          <h3>85 % OFF Hurry Up</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    
    </>
  )
}

export default Hero