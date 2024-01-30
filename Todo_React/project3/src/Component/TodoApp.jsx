import React, { useEffect, useState} from 'react'
import AddToDo from './AddToDo';
import TodoList from './TodoList';

function TodoApp() {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const storedTodos = JSON.parse
        (localStorage.getItem('todos')) || []
        setTodos(storedTodos);
        
    },[])

    useEffect(() => {
        localStorage.setItem
        ('todos',JSON.stringify(todos));
    },[todos])



    const addTodo =(newTodo) => {

        setTodos([...todos,{id:Date.now, text:newTodo, completed:false}])

    }
    const toggleTodo =(id) =>{
        setTodos(
            todos.map((todo)=>
                todo.id === id ? {...todo, completed : !todo.completed} : todo
            )
        )
    }
    const removeTodo = (id) => {
        setTodos(todos.filter((todo) =>todo.id !== id))

    }
  return (
    
    <div className='todo-app'>
        <h1>Todo App</h1>
        <AddToDo addTodo={addTodo}/>
        <TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo}/ >

        
      
    </div>
   
  )
}

export default TodoApp
