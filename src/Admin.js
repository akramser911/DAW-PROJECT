
import React, { useState } from "react";

import './App.css'
import Student from "./components/Student";

const initialStudents = [
    { id : 1, name:'Akram abdelbari SERRAR', email:'akram.serrar@univ-constantine2.dz', numAbs: 2},
    { id : 2, name:'Akram abdelbari', email:'akram.serrar@univ-constantine2.dz', numAbs: 0},
    { id : 3, name:'Akram ', email:'akram.serrar@univ-constantine2.dz', numAbs: 3},
    { id : 4, name:'Akram abdelbari', email:'akram.serrar@univ-constantine2.dz', numAbs: 4},
    { id : 5, name:'Akram abdelbari SERRAR', email:'akram.serrar@univ-constantine2.dz', numAbs: 0},
    { id : 6, name:'Akram abdelbari', email:'akram.serrar@univ-constantine2.dz', numAbs: 0},
    { id : 7, name:'Akram ', email:'akram.serrar@univ-constantine2.dz', numAbs: 1},
    { id : 8, name:'Akram abdelbari', email:'akram.serrar@univ-constantine2.dz', numAbs: 0},
]




function Admin() {
    
    const [studentName, setName]= useState('');
    const [studentMail, setMail]= useState('');

    const [students, setStudents] = useState(initialStudents);
    
    const deleteStudent =(id)=>{
        const newStudents = students.filter((item)=>{
            return item.id !== id;
        })
        setStudents(newStudents);
    }

    const addStudent = (e) =>{
        e.preventDefault();
        const newStudent = {
            name:studentName,
            email:studentMail,
            numAbs:0,
            id:Date.now()
        };
        const new_students=[...students,newStudent];
        setStudents(new_students)
        setName('');
        setMail('');

    }
    return (
        <div>
            <h1 className="specialTitle">Students</h1>
            <div className="buttons">
                <a href="/Admin">Students</a>
                <a href="/Teachers">Teachers</a>
                <a href="/Modules">Modules</a>
            </div>
            <div className="Students">
                <table>
                    <thead>
                        <tr>
                            <th>FULL STUDENTS NAMES</th>
                            <th>EMAILS</th>
                            <th>NUMBERS OF ABSENCES</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            students.map((Value, key)=>{
                                return(
                                    <Student key={key}  Value={Value} deleteStudent={deleteStudent}/>
                                );
                                
                            })
                        }
                    </tbody>
                </table>
                <div>
                    <form className="studentForm" onSubmit={addStudent}>
                        <label>Full Student name</label>
                        <input placeholder="Akram SERRAR" type='text' value={studentName} onChange={(e)=> setName(e.target.value)}></input>
                        <label>email</label>
                        <input placeholder="example@univ-constantine2.dz" type='email' value={studentMail} onChange={(e) => setMail(e.target.value)}></input>
                        <button>Add Student</button>
                    </form>
                </div>
                
                
            </div>
            
        </div>
        
        

      );
  }
  
  export default Admin;