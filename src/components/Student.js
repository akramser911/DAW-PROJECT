import { MdMode } from "react-icons/md";
import { MdDelete } from "react-icons/md";

export default function Student({index, Value, deleteStudent}) {
       
    return (
        <tr>
            <td>{Value.name}</td>
            <td>{Value.email}</td>
            <td>{Value.numAbs}</td>
            <td className="lastTd"><button className="editedBtn" > <MdMode/> UPDATE</button></td>
            <td className="lastTd"><button className="editedBtn" onClick={()=>{deleteStudent(Value.id)}}><MdDelete/>DELETE</button></td>
        </tr>
        
    );
}
