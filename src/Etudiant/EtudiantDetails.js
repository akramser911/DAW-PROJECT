import React from 'react'
import'.//Etudiant.css'

function EtudiantDetails() {
    return (
        <div>
            <div className="buttons">
                <a href="/EtudiantDetails">Details</a>
                <a href="/EtudiantEdit">Edit Profile</a>
                <a href="/Justification">Justification</a>
            </div>
            <br></br>
             <div className='details'>
                <div className='shape'><h2 >Full Name</h2></div>
                <p className='bordered'>Akram SERRAR</p>
                <div className='shape'><h2 >Email</h2></div>
                <p className='bordered'> akram@gmail.com</p>
                <div className='shape'><h2 >password</h2></div>
                <p className='bordered'>*******</p>
                <div className='shape'><h2 >Number of absences</h2></div>
                <p className='bordered'>0</p>
            </div>
        </div>
       
      )
}

export default EtudiantDetails