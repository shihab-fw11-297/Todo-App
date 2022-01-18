import { useState, useContext, useRef, useEffect } from "react"
import { DataContext } from "./DataProvider"

const FormInput = () => {

    const [todos, setTodos] = useContext(DataContext);
    const [todoName, setTodoName] = useState('');
    const todoInput = useRef();

    const addItem = (e) => {
        e.preventDefault();
        setTodos([...todos, { name: todoName, complete: false }])
        setTodoName('')
        todoInput.current.focus();
    }

    useEffect(() =>{
        todoInput.current.focus();
    },[])
    return (
        <form autoComplete="off" onSubmit={addItem}>
            <input type="text" placeholder='What Need to be done?'
                required name="todos" id="todos" value={todoName} ref={todoInput}
                onChange={e => setTodoName(e.target.value.toLowerCase())} />
            <button type="submit">Add Item</button>
        </form>
    )
}

export default FormInput