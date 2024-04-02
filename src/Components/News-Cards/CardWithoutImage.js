import React from 'react'
import './Cards.css'
import heart from "../../Images/icons8-heart-24.png";
import comment from "../../Images/icons8-comment-24.png";
import eye from "../../Images/icons8-eye-24.png";
function CardWithoutImage() {
  return (
    <div className="card">
    <div className="card-box">
      <div className="card-heading">
        Middle East peace talks scheduled to take place
      </div>
      <div className="card-descriptions">
        Create a blog post subtitle that summarizes your post in a few
        short, punchy sentences and entices your
      </div>
    </div>

    <div className="horizontal-line"></div>
    <div className="card-icons">
      <div className="card-icons-left">
        <div>
          <img src={eye} />
          {0}
        </div>
        <div>
          <img src={comment} />
          {0}
        </div>
      </div>
      <div className="card-icons-right">
        <div>
          <img src={heart} />   
          {0}
        </div>
      </div>
    </div>
  </div>
  )
}

export default CardWithoutImage