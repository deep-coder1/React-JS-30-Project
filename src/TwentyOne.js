// Create a simple counter application using useReducer to manage the state.
import { type } from '@testing-library/user-event/dist/type';
import React, { useReducer } from 'react'

function reducer(state,action){
  case 'INCREMENT':
    return {count: state.count+1}
}

export default function TwentyOne() {

    const [state, dispatch] = useReducer(reducer,{count:0});
  return (
    <div>
        <h1>Counter App</h1>
        <p>Count:</p>
        <button onClick={()=> dispatch({type:'INCREMENT'})}>+</button>
        <button onClick={()=>dispatch({type:'DECREMENT'})}>-</button>
        <button onCanPlay={()=> dispatch({type:'RESET'})}>Reset</button>
    </div>
  )
}
