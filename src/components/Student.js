import React, { useState } from 'react'

export default function Student({index, Value, deleteStudent}) {
       
    return (
        <tr>
            <td>{Value.name}</td>
            <td>{Value.email}</td>
            <td>{Value.numAbs}</td>
            <td className="lastTd"><button className="editedBtn" >UPDATE</button></td>
            <td className="lastTd"><button className="editedBtn" onClick={()=>{deleteStudent(Value.id)}}>DELETE</button></td>
        </tr>
        
    );
}
