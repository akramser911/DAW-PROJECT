import React from 'react'
import image from '../people-img.jpg'

function TeacherControl() {
  return (
    <div>
            <div className="buttons">
                <a href="/Teacherdetails">Teacher Details</a>
                <a href="/StudentConsult">Student Consultation</a>
            </div>
            <div className="homeDiv">
                <h1 className="welcomeMsg"> WELCOME</h1>
                <h2 className="paraMsg">to the Teacher Section !</h2>
                <img src={image} alt='home page ' className='loginPic' />
            </div>
    </div>
  )
}

export default TeacherControl