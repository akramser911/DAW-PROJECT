

export default function Module({index, Value, deleteModules}) {
       
    return (
        <tr>
            <td>{Value.name}</td>
            <td className="lastTd"><button className="editedBtn" >UPDATE</button></td>
            <td className="lastTd"><button className="editedBtn" onClick={()=>{deleteModules(Value.id)}}>DELETE</button></td>
        </tr>
        
    );
}
