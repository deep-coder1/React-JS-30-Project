// Create a simple counter application using useReducer to manage the state.
import React, { useReducer } from 'react'

export default function TwentyOne() {

    const [state, dispatch] = useReducer(reducer,{count:0});
  return (
    <div>
        <h1>Counter App</h1>
        <p>Count:</p>
        <button>+</button>
        <button>-</button>
        <button>Reset</button>
    </div>
  )
}
