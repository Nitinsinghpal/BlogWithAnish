import React from "react";
import "./Cards.css";
import army from "../../Images/ArmyBrats.webp";
import aircraft from "../../Images/Aircraft.webp";
import CardWithoutImage from "./CardWithoutImage";
import CardWithImage from "./CardWithImage";

function Cards({background,heading,images,mwCard}) {
    var color = background ?? '#FFFFFF';

    function CardWithImageFunc(){
        let card = []
        let mwCardAdded = false;
        images.map((d)=>{
            card.push( <CardWithImage image={d}/>)
            if (mwCard) {
                card.push(<CardWithoutImage/>)
                mwCard = false
                mwCardAdded = true
            }
        })
        if (mwCardAdded == false) {
            card.push(<CardWithoutImage/>)
            
        }
        return card;
    }
  return (
    <div className="card-main">
        <div className="card-main-content"  style={{backgroundColor: color}}>
        <div className="cards-main-heading">{heading}</div>
      <div className="cards">
        {/* Card 1 */}
        {CardWithImageFunc()}
        {/* <CardWithImage image={army}/> */}

        {/* Card 2 */}
        {/* <CardWithImage image={aircraft}/> */}
        

        {/* Card Without picture */}
        {/* <CardWithoutImage/> */}

      </div>
        </div>
      
    </div>
  );
}

export default Cards;
