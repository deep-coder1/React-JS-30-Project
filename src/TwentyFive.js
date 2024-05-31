// Build a draggable component using useReducer to manage its position.
import React, { useReducer } from 'react'

function boxReducer(state,action){
  switch(action.type){
    case 'MOVE':
    return {
      ...state,
      left:action.payload.left,
      top:action.payload.top
    };
    default:
      return state;
  }
}

export default function TwentyFive() {

  const [boxState,dispatch] = useReducer(boxReducer,{left:0,top:0});

  let isDragging = false;
  let initialX = 0;
  let initialY = 0;

  const handleMouseDown = (e) => {
    isDragging = true;
    initialX = e.ClientX - boxState.left;
    initialY = e.ClientY - boxState.top;
  }

  const handleMouseUp = (e) => {
    isDragging = false;
  }

  const handleMouseMove = (e) => {
    // console.log(e.clientX)
    if(isDragging){
      const left = e.ClientX - initialX;
      const top = e.ClientY - initialY;
      dispatch({type:'MOVE',payload:{left,top}});
    }
  }

  return (
    <div 
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      style={{left:boxState.left,top:boxState.top,position:'absolute'}}
    >
        Drag Me
    </div>
  )
}
