// Build a draggable component using useReducer to manage its position.
import React, { useReducer } from 'react'

function boxReducer(){

}

export default function TwentyFive() {

  const [boxState,dispatch] = useReducer(boxReducer,{left:0,top:0});

  const handleMouseDown = (e) => {
    //
  }

  const handleMouseUp = (e) => {
    //
  }

  const handleMouseMove = (e) => {
    console.log(e.clientX)
  }

  return (
    <div 
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
        Drag Me
    </div>
  )
}
