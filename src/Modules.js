
import React, { useState } from "react";
import Module from "./components/Module";

import './App.css'

const initialModules = [
    { id : 1, name:'web development'},
    { id : 2, name:'mobile development'},
    { id : 3, name:'desktop development'}
]




function Modules() {
    const [moduleName, setModuleName]= useState('');
    const [modules, setModules] = useState(initialModules);
    
    const deleteModules =(id)=>{
        const newModules = modules.filter((item)=>{
            return item.id !== id;
        })
        setModules(newModules);
    }

    const addModule = (e) =>{
        e.preventDefault();
        const newModule = {
            name:moduleName,
            id:Date.now()
        };
        const new_modules=[...modules,newModule];
        setModules(new_modules);
        setModuleName('');

    }
    return (
        <div>
            <h1 className="specialTitle">Modules</h1>
            <div className="buttons">
                <a href="/Admin">Students</a>
                <a href="/Teachers">Teachers</a>
                <a href="/Modules">Modules</a>
            </div>
            <div className="Students">
                <table>
                    <thead>
                        <tr>
                            <th>FULL MODULE NAME</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            modules.map((Value, key)=>{
                                return (
                                    <Module key={key}  Value={Value} deleteModules={deleteModules}/>
                                );
                            })
                        }
                    </tbody>
                </table>
                <div>
                    <form className="studentForm" onSubmit={addModule} >
                        <label>Full module name</label>
                        <input placeholder="DAW" type='text' value={moduleName} onChange={(e)=> setModuleName(e.target.value)}></input>
                        <button>Add Module</button>
                    </form>
                </div>
                
                
            </div>
            
        </div>
        
        

      );
  }
  
  export default Modules;