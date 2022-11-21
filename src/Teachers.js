import './App.css'
import React, { useState } from "react";
import Student from './components/Student';
const initialTeachers = [
    { id : 1, name:'Akram', email:'akram.serrar@univ-constantine2.dz', numAbs: 2},
    { id : 2, name:'Akram', email:'akram.serrar@univ-constantine2.dz', numAbs: 0},
    { id : 3, name:'Akram ', email:'akram.serrar@univ-constantine2.dz', numAbs: 3},
    { id : 4, name:'Akram', email:'akram.serrar@univ-constantine2.dz', numAbs: 4},
    { id : 5,name:'Akram', email:'akram.serrar@univ-constantine2.dz', numAbs: 0}
]

function Teachers() {

    
    const [Teachertitle, setTitle] = useState('');
    const [TeacherMail, setMail] = useState('');
    const [teachers, setTeachers] = useState(initialTeachers);

    const deleteStudent =(id)=>{
        const newTeachers = teachers.filter((item)=>{
            return item.id !== id;
        })
        setTeachers(newTeachers);
    }

    const addTeachers = (e) =>{
        e.preventDefault();
        const newStudent = {
            name:Teachertitle,
            email:TeacherMail,
            numAbs:0,
            id:Teachertitle
        };
        const new_teachers=[...teachers,newStudent];
        setTeachers(new_teachers);
        setTitle('');
        setMail('');

    }
    return (
        <div>
            <h1 className="specialTitle">Teachers</h1>
            <div className="buttons">
                <a href="/Admin">Students</a>
                <a href="/Teachers">Teachers</a>
                <a href="/Modules">Modules</a>
            </div>
            <div className="Students">
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
                            teachers.map((Value, key)=>{
                                return (
                                    <Student key={key}  Value={Value} deleteStudent={deleteStudent}/>
                                    
                                );
                            })
                        }
                    </tbody>
                </table>
                <div>
                    <form className="studentForm" onSubmit={addTeachers}>
                        <label>Full Teacher name</label>
                        <input placeholder='Mr Akram' type='text' value={Teachertitle} onChange={(e)=> setTitle(e.target.value)}></input>
                        <label>email</label>
                        <input placeholder='example@univ-constantine2.dz' type='email' value={TeacherMail} onChange={(e) => setMail(e.target.value)}></input>
                        <button>Add Teacher</button>
                    </form>
                </div>
                
                
            </div>
            
        </div>
      );
  }
  
  export default Teachers;