// Create a simple to-do list using useReducer to manage tasks. 
import React, { useReducer } from 'react'

export default function TwentyTwo() {

    const taskReducer = (state,action) => {
        case 'ADD_TASK'
    }

    const [state,dispatch] = useReducer{taskReducer,[]};

    const addTask = () => {}

  return (
    <div>
        <h1>Todo List</h1>
        <input type='text' placeholder='Add new Task' />
        <button onClick={addTask}>Add</button>
    </div>
  )
}
