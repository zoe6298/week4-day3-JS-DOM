import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])
  const inputRef = useRef()

  const addTodo = () => {
    const todoItem = inputRef.current.value
    setTodos([...todos, todoItem])
    inputRef.current.value = ""
  }
    
  const removeTodo = (event) => {
    console.log(event.target.id)
    setTodos(todos.filter((item, index) =>
      index !== parseInt(event.target.id)
    )
    )
  }

  return (
    <div className="App">
      <ul>
        {
          todos.map((element, index) =>
            <li id={index} onClick={removeTodo}>{element}</li>
          )
        }
        
      </ul>
      <input ref={inputRef} type="text" placeholder="enter to do here!"></input>
      <button onClick={addTodo}>Add</button>
    </div>
  )
}

export default App
