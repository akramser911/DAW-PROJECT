import React from 'react'


function TeacherDetails() {
  return (
    <div>
            <div className="buttons">
                <a href="/TeacherDetails">Teacher Details</a>
                <a href="/StudentConsult">Student Consultation</a>
            </div>
            <br></br>
             <div className='details'>
                <div className='shape'><h2 >Full Name</h2></div>
                <p className='bordered'>Akram SERRAR</p>
                <div className='shape'><h2 >Email</h2></div>
                <p className='bordered'> akram@gmail.com</p>
                <div className='shape'><h2 >password</h2></div>
                <p className='bordered'>*******</p>
            </div>
            <div className='updateBtn'>
                <button>UPDATE</button>
            </div>
        </div>
  )
}

export default TeacherDetails