import React from 'react'
import './CrouVideo.css'
import walk from '../../Videos/file.mp4'
function CrouVideo() {
  return (
    <div className='crou-main'>
       <video width="100%" height="100%">
        <source src={walk} type="video/mp4"  loop autoPlay muted/>
      </video>
    </div>
  )
}

export default CrouVideo