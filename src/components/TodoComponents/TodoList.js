import React from 'react'
import Todo from './Todo'

const TodoList = props => {
    return (
        <ul className="todo-list">
            {props.todos.map(item =>
                <Todo
                    todo={item}
                    key={item.id}
                    toggleComplete={props.toggleComplete}
                    crossOut={props.crossOut}
                />
            )}
        </ul>
    )
}

export default TodoList
