// Work with multiple states in a single state object.
// The component should display the following information on the screen:
// 1. A count value, initially set to 0.
// 2. A text value, initally set to 'Hello, World'.
// 3. An "Active" status, initially set to true.

import React, { useState } from 'react'

export default function TwentyEight() {

    const [state,setState] = useState({
      count:0,
      text:'Hello World',
      isActive:true
    })

    function incrementCount () {
      //
    }

    function changeText () {
      // 
    }

    function toggleActive () {
      // 
    }

  return (
    <div>
        <h1>Multiple State Example</h1>
        <p>Count:</p>
        <p>Text:</p>
        <p>Active:</p>

        <button onClick={incrementCount}>Increment</button>
        <button onClick={changeText}>Change Text</button>
        <button onClick={toggleActive}>Toggle Active</button>

    </div>
  )
}
