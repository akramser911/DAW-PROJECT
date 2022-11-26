import { MdMode } from "react-icons/md";
import { MdDelete } from "react-icons/md";

export default function Module({index, Value, deleteModules}) {
       
    return (
        <tr>
            <td>{Value.name}</td>
            <td className="lastTd"><button className="editedBtn" > <MdMode/> UPDATE</button></td>
            <td className="lastTd"><button className="editedBtn" onClick={()=>{deleteModules(Value.id)}}><MdDelete/> DELETE</button></td>
        </tr>
        
    );
}
