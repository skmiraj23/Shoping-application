import React from 'react'
import './cardsec.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from '../card/Card';
import road from "../../assets/roadstar.jpg";
import sam from "../../assets/samsung.png";
import tnq from "../../assets/tanishq.png";
import usp from "../../assets/uspolo.png";
import levis from "../../assets/levis.png";
import ank from "../../assets/anouk.jpeg";
import dress from "../../assets/dressberry.png";
import lg from "../../assets/lg.jpg";
import mshirt from "../../assets/shirt.webp";
import wshirt from "../../assets/womenshirt.jpg";
import jwll from "../../assets/jewell.webp";
import tv from "../../assets/tv.jpg"
import { NavLink, useParams, useNavigate } from 'react-router-dom';










const Cardsection = () => {

      const navigate = useNavigate();
  
      const gotoelect = ()=>{
        navigate("/products/category/electronics");
      }

      const gotomen = ()=>{
        navigate("/products/category/men's clothing");
      }
      const gotowomen = ()=>{
        navigate("/products/category/women's clothing");
      }
      const gotojwell = ()=>{
        navigate("/products/category/jewelery");
      }
      const gotoshop = ()=>{
        navigate("/products");
      }


    return (
        <>
        <div className="deal text-center">
         <button className='shop-now text-center' onClick={gotoshop}>Shop Now</button>
         <h1 className='mt-5 deal-line'>OYE HOYE DEALS</h1>
        </div>

        <section className='card-sec'>
          <Card  mimg = {mshirt} ftitle = "Summer Collections" fbrand = {road} sbrand={usp} ltitle="UP TO 80% Off" onclick={gotomen}/>
          <Card mimg = {wshirt} ftitle = "Standout Find" fbrand = {levis} sbrand={dress} ltitle="UP TO 60% Off" onclick={gotowomen} />
          <Card mimg = {jwll} ftitle = "Crafted Brilliance" fbrand = {ank} sbrand={tnq} ltitle="UP TO 85% Off" onclick={gotojwell} />
          <Card mimg = {tv} ftitle = "Live Your Best" fbrand = {sam} sbrand={lg} ltitle="UP TO 30% Off" onclick={gotoelect} />
          {/* <Card mimg = {tv} ftitle = "Live Your Best" fbrand = {sam} sbrand={lg} ltitle="UP TO 30% Off" ></Card> */}
          
        </section>
        


        </>
    )
}

export default Cardsection