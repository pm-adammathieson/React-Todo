import React from 'react'

const TodoForm = props => {
    
    return (
        <form onSubmit={props.addTask}>
            <input 
                name="inputText" 
                value={props.inputText}
                type="text" 
                onChange={props.handleChanges}
                placeholder='...todos'
            />
            <button
                type="submit"
                value="Add todo"
                name="submit"
            >
                Add Todo
            </button>
        </form>
    )
}

export default TodoForm