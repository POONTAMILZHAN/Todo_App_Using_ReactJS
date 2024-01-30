import React from 'react'

function TodoItem({todo, toggleTodo, removeTodo}) {
  return (
    <li className='todo-item'>
        <input 
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)} 
        />
        <span className={todo.completed ? "completed" :""}>{todo.text}</span>
        <button onClick={() => removeTodo(todo.id)}>Remove</button>
    </li>
  )
}

export default TodoItem