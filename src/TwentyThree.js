// Build a pagination component using useReducer to manage the current page and the number of items per page.

import React from 'react'

export default function TwentyThree() {

    const data = Array.from({length:25},(_,index)=> `Item ${index+1}`);
    console.log(data);
  return (
    <div>
        <h1>Pagination Example</h1>
    </div>
  )
}
