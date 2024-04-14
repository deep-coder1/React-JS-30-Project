// Build a list component to display a list of items.
import React from 'react'

export default function Four() {
    const items = ['Item1', 'Item2', 'Item3', 'Item4', 'Item5']

  return (
    <div>
        <ul>
            {items.map((item,index)=>{
                return <li key={index}>{item}</li>
            })}
        </ul>
    </div>
  )
}
