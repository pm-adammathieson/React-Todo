import React from 'react'
import Todo from './Todo'

import Card from '@material-ui/core/Card'

const TodoList = props => {
    
    // console.log(props.todos)
    return (
        <Card>
            <h2>{props.todos.length === 0 ? 'Nothing Todo 😔' : "Time to do work! 🤠"}</h2>
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
        </Card>
    )
}

export default TodoList
