import React from 'react';
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: [],
      inputText: '',
    }
  }

  addTask = e => {
    e.preventDefault()

    const newTask = {
      task: this.state.inputText,
      id: Date.now(),
      completed: false
    }

    this.setState({
      todos: [...this.state.todos, newTask],
      inputText: ''
    })
  }

  handleChanges = e => {
    e.preventDefault()
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  toggleComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(item => {
        if (id === item.id) {
          return {
            ...item,
            completed: !item.completed
          }
        }
        return item
      })
    })
  }

  // crossOut = e => {
  //   e.target.style.textDecoration = "line-through"
  //     console.log(e.target)
  // }

  clearCompleted = () => {
    console.log('clear em!')
    this.setState({ 
      todos: this.state.todos.filter(item => !item.completed)})
  }

  render() {
    return (
      <div className="container">
        <h2>Todos</h2>
        <TodoForm 
          inputText={this.state.inputText}
          addTask={this.addTask}
          handleChanges={this.handleChanges}
          clearCompleted={this.clearCompleted}
        />
        <TodoList 
          todos={this.state.todos} 
          toggleComplete={this.toggleComplete}
          crossOut={this.crossOut}
        />
      </div>
    );
  }
}

export default App;
