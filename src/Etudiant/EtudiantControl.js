import React from 'react'
import image from '../people-img.jpg'
function EtudiantControl() {
  return (
    <div>
            <div className="buttons">
                <a href="/EtudiantDetails">Details</a>
                <a href="/EtudiantEdit">Edit Profile</a>
                <a href="/Justification">Justification</a>
            </div>
            <div className="homeDiv">
                <h1 className="welcomeMsg"> WELCOME</h1>
                <h2 className="paraMsg">to the Student Section !</h2>
                <img src={image} alt='home page ' className='loginPic' />
            </div>
    </div>
  )
}

export default EtudiantControl