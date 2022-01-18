import { useContext, useState } from "react"
import { DataContext } from "./DataProvider";

const Footer = () => {

    const [checkAll, setCheckAll] = useState(false)
    const [todos, setTodos] = useContext(DataContext)

    const handleCheckAll = () => {
        const newTodos = [...todos]
        newTodos.forEach((todo) => {
            todo.complete = !checkAll;
        })
        setTodos(newTodos);
        setCheckAll(!checkAll);
    }

    const deleteTodo = () => {
        const newTodos = todos.filter(todo => {
            return todo.complete === false
        })
        setTodos(newTodos)
        setCheckAll(false)
    }
    return (
        <>
            {
                todos.length === 0 ? <h2>Congratulation! Nothings To Do</h2>
                    :
                    <div className="row">
                        <label htmlFor="all">
                            <input type="checkbox" name="all" id="all" checked={checkAll} onClick={handleCheckAll} />
                            ALL
                        </label>
                        <p>You have {todos.filter(todos => todos.complete === false).length} Todo</p>
                        <button id="delete" onClick={deleteTodo}>Delete</button>
                    </div>
            }
        </>
    )
}

export default Footer