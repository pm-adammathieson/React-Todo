import React from 'react'

const Todo = props => {
    console.log("TODO", props)


    return (
        <li className="todo-item" onClick={() => props.toggleComplete(props.todo.id)} onDoubleClick={props.crossOut}>
            {props.todo.task}
        </li>
    )
}


// style={{textDecoration: "line-through"}}

export default Todo