import React, { useState } from 'react'


function AddToDo({addTodo}) {


    const [newTodo, setNewTodo] = useState('')


    const handleAddTodo = () =>{
        if(newTodo.trim !== ''){
            addTodo(newTodo);
            setNewTodo('');
        } 
    }
  return (
    <div className='add-todo'>
      
      
        <input 
        type="text"
         value={newTodo}
         onChange={(e) => setNewTodo(e.target.value)}/>
        <button onClick={handleAddTodo} className='btn'>Add Task</button>
      </div>
      
        
   
  )
}

export default AddToDo
