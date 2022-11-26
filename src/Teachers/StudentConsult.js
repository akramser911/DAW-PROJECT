import React from 'react'

const students = [
    { id : 1, name:'Akram', email:'akram.serrar@univ-constantine2.dz', numAbs: 2},
    { id : 2, name:'Akram', email:'akram.serrar@univ-constantine2.dz', numAbs: 0},
    { id : 3, name:'Akram ', email:'akram.serrar@univ-constantine2.dz', numAbs: 3},
    { id : 4, name:'Akram', email:'akram.serrar@univ-constantine2.dz', numAbs: 4},
    { id : 5,name:'Akram', email:'akram.serrar@univ-constantine2.dz', numAbs: 0}  ,
    { id : 3, name:'Akram ', email:'akram.serrar@univ-constantine2.dz', numAbs: 3},
    { id : 4, name:'Akram', email:'akram.serrar@univ-constantine2.dz', numAbs: 4},
    { id : 5,name:'Akram', email:'akram.serrar@univ-constantine2.dz', numAbs: 0}
]

function StudentConsult() {
  return (
    <div>
        <div className="buttons">
                <a href="/TeacherDetails">Teacher Details</a>
                <a href="/EtudiantEdit">Student Consultation</a>
        </div>
        <table>
                    <thead>
                        <tr>
                            <th>FULL TEACHERS NAMES</th>
                            <th>EMAILS</th>
                            <th>NUMBERS OF ABSENCES</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            students.map((Value, key)=>{
                                return (
                                    <tr key ={key}>
                                        <td>{Value.name}</td>
                                        <td>{Value.email}</td>
                                        <td>{Value.numAbs}</td>
                                        <td className="lastTd"><button className="editedBtn" >+</button></td>
                                        <td className="lastTd"><button className="editedBtn" >-</button></td>
                                    </tr>
                                    
                                    
                                );
                            })
                        }
                    </tbody>
                </table>
    </div>
  )
}

export default StudentConsult