// Build a draggable component using useReducer to manage its position.
import React, { useReducer, useState } from 'react'

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
  const [isDragging, setIsDragging] = useState(false);
  const [initialX, setInitialX] = useState(0);
  const [initialY, setInitialY] = useState(0);

  // let isDragging = false;
  // let initialX = 0;
  // let initialY = 0;

  const handleMouseDown = (e) => {
    // isDragging = true;
    setIsDragging(true);
    setInitialX(e.clientX - boxState.left);
    setInitialY(e.clientY - boxState.top);
  }

  const handleMouseUp = (e) => {
    // isDragging = false;
    setIsDragging(false);
  }

  const handleMouseMove = (e) => {
    // console.log(e.clientX)
    if(isDragging){
      const left = e.clientX - initialX;
      const top = e.clientY - initialY;
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
