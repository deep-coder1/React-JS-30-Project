// Create a simple to-do list using useReducer to manage tasks.
import { type } from "@testing-library/user-event/dist/type";
import React, { useReducer } from "react";
import { useState } from "react";

export default function TwentyTwo() {
  const taskReducer = (state, action) => {
    switch (action.type) {
      case "ADD_TASK":
        return [
          ...state,
          { id: Date.now(), text: action.payload, completed: false },
        ];

        case 'REMOVE':
            return state.filter((task)=> task.id!== action.payload)
    }
  };

  const [tasks, dispatch] = useReducer(taskReducer, []);

  const [taskText, setTaskText] = useState("");
  const addTask = () => {
    dispatch({ type: "ADD_TASK", payload: taskText });
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Add new Task"
      />
      <button onClick={addTask}>Add</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span>{task.text}</span>
            <button onClick={()=> dispatch({type:'REMOVE', payload:task.id})}>REMOVE</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
