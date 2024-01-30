import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddToDo from './Component/AddToDo'
import TodoApp from './Component/TodoApp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TodoApp />
    </>
  )
}

export default App
