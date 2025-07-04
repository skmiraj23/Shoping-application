import React from "react";
import "./card.css"

const Card = ({ mimg, ftitle, fbrand, sbrand, ltitle , onclick}) => {
  return (
    <>
      <div className="card" onClick={onclick} >
        <img className='main-img' src={mimg} alt="" />
        <h3>{ftitle}</h3>
        <div className="brand">
          <img className='b-logo' src={fbrand} alt="" />
          <img className='b-logo' src={sbrand} alt="" />
        </div>
        <h5>{ltitle}</h5>
      </div>

    </>
  )
}

export default Card