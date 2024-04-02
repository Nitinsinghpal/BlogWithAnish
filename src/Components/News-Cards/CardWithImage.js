import React from 'react'
import './Cards.css'
import heart from "../../Images/icons8-heart-24.png";
import comment from "../../Images/icons8-comment-24.png";
import eye from "../../Images/icons8-eye-24.png";
function CardWithImage({image}) {
  return (
    <div className="card">
    <div className="card-image">
      <img src={image} />
    </div>
    <div className="card-heading">Demonstrations across EU break out</div>
    <div className="horizontal-line"></div>
    <div className="card-icons">
      <div className="card-icons-left">
        <div>
          <img src={eye} />
          {10}
        </div>
        <div>
          <img src={comment} />
          {11}
        </div>
      </div>
      <div className="card-icons-right">
        <div>
          <img src={heart} />
          {9}
        </div>
      </div>
    </div>
  </div>
  )
}

export default CardWithImage