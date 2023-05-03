import React, { useState } from "react";
import AddTodo from './AddTodo';
import TodoItem from './TodoItem';
function Todo() {
    const [todos, setTodos] = useState([])
    return (
        <>
            <AddTodo todos={todos} setTodos={setTodos} />
            <ul>
                {
                    todos.map((elem) =>(
                        <TodoItem key={elem.id} todo={elem.todo}/>
                    ))
                }
            </ul>

        </>


    )
}
export default Todo