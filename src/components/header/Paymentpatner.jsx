import React, { Component } from "react";
import Slider from "react-slick";
import "./paymentpatner.css"
import icici from "../../assets/icici.png"
import payzap from "../../assets/payzapp.png"
import hsbc from "../../assets/hsbc.png"
import paytm from "../../assets/paytm.png"
import rbl from "../../assets/rbl.png"


const Paymentpatner = () => {

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };


  return (
    <>

      <h2 className="text-center mt-4 mb-4 fs-2">Our Payment Partners</h2>
      <h4 className="text-center mt-4 text-success">Assured Cashback*</h4>
      <h4 className="text-center mt-4 mb-4 text-danger">10% Instant Discount*</h4>

      <div className="slider-container mb-5">
        <Slider {...settings}>
          <div>
            <img src={paytm} alt="" />
          </div>
          <div>
            <img src={rbl} alt="" />
          </div>
          <div>
            <img src={payzap} alt="" />
          </div>
          <div>
            <img src={icici} alt="" />
          </div>
          <div>
            <img src={hsbc} alt="" />
          </div>
        </Slider>
      </div>

    </>
  )
}

export default Paymentpatner