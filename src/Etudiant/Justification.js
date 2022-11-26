import React from 'react'
import'.//Etudiant.css'

function Justification() {
  return (
    <div>
      <div className="buttons">
                <a href="/EtudiantDetails">Details</a>
                <a href="/EtudiantEdit">Edit Profile</a>
                <a href="/Justification">Justification</a>
      </div>
      <div className='detailsJustification'>
        <form>
            <input type='text' placeholder='name'></input>
            <br></br>
            <input type='file'></input>
            <label>date of absence</label>
            <input type='date'></input>
            <br></br>
            <input type='submit'></input>
        </form>
    </div>
    </div>
    
  )
}

export default Justification