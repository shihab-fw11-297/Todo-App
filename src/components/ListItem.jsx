import { useState } from "react"


const ListItem = ({ todo, id, checkComplete,handleEditTodos }) => {
    const [onEdit, setOnEdit] = useState(false);
    const [editValue, setEditValue] = useState(todo.name);

    const handleEdit = () => {
        setOnEdit(true)
    }

    const handleSave = (id) =>{
        setOnEdit(false)
        if(editValue){
            handleEditTodos(editValue,id)
        }else{
            setEditValue(todo.name)
        }
    }

    if (onEdit) {

        return (
            <li>
        
                <input type="text" id="editValue" value={editValue} 
                name="editValue"  onChange={e => setEditValue(e.target.value.toLowerCase())}  />

                <button onClick={() => handleSave(id)}>Save</button>
            </li>
        )

    }
    else {
        return (
            <li>
                <label htmlFor={id} className={todo.complete ? "active" : ""}>
                    <input type="checkbox" name="" id={id} checked={todo.complete}
                        onChange={() => checkComplete(id)} />
                    {todo.name}
                </label>
                <button disabled={todo.complete} onClick={handleEdit}>Edit</button>
            </li>
        )
    }
}

export default ListItem