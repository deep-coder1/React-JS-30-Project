// Create a component that changes its background color when clicked.
import React, { useState } from 'react'

export default function Nine() {

    const [backgroundColor , setBackgtroundColor] = useState('yellow');

    const handleClick = () => {
        const newColor = backgroundColor === 'yellow' ? 'lightblue' : 'white';
        setBackgtroundColor(newColor);
    }

  return (
    <div onClick={handleClick} style={{
        // backgroundColor: 'white',
        backgroundColor,
        width: '200px',
        height: '200px',
        cursor: 'pointer'
    }}>
        Click me to Change Color
    </div>
  )
}
