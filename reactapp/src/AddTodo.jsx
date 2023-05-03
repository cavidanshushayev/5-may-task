import React, { useState } from "react";
import uuid from 'react-uuid';
function AddTodo({ setTodos, todos }) {
    const [todoToAdd, setTodoToAdd] = useState("")
    const handleAdd = () => {
        const newTodo = {
            id: uuid(),
            todo: todoToAdd
        }  
        setTodos([...todos, newTodo])
        setTodoToAdd("")
    }

    return(
    
        <>
        <input type="text"  placeholder="add todo " value={todoToAdd} onChange={(e) =>setTodoToAdd(e.target.value)} />
        <button onClick={handleAdd}>save</button>
        </>
    )
}
export default AddTodo

