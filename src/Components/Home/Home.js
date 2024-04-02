import React from 'react'
import Navbar from '../NavBar/Navbar'
import './Home.css'
import Header from '../HeaderSection/Header'
import CrouVideo from '../Crou-Video/CrouVideo'
import Cards from '../News-Cards/Cards'
import whitehouse from '../../Images/whiteHouse.webp'
import speaker from '../../Images/speaker.jpg'
import army from '../../Images/ArmyBrats.webp'
import aircraft from '../../Images/Aircraft.webp'
import Footer from '../Footer/Footer'



function Home() {
  var data= {mainHeading:"",}
  return (
    <div className='home-Main'>
        {/* <Navbar/>
        <Header /> */}
        <CrouVideo/>
        <Cards heading={"News"} images={[army,aircraft]} mwCard={false}/>
        <Cards background={"#F2F2F2"} heading={"Politics"} images={[whitehouse,speaker]}  mwCard={true}/>
        <Cards heading={"Opinion"} images={[army,aircraft]} mwCard={false}/>
        <Cards background={"#F2F2F2"} heading={"Sports"} images={[whitehouse,speaker]}  mwCard={true}/>
        <Cards heading={"Entertainment"} images={[army,aircraft]} mwCard={false}/>

        <Footer/>
    </div>
  )
}

export default Home