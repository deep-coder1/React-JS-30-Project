// Build a pagination component using useReducer to manage the current page and the number of items per page.

import React, { useEffect, useReducer } from 'react'

const itemsPerPage = 5;

const paginationReducer = (state,action) => {
  switch(action.type){
    case 'SET_TOTAL_ITEMS':
      return {...state,totalItem:action.payload}
  }
}

export default function TwentyThree() {

  const [paginationState, dispatch] = useReducer(paginationReducer,{
    currentPage:1,
    totalItem:0
  })

    const data = Array.from({length:25},(_,index)=> `Item ${index+1}`);
    console.log(data);

    useEffect(()=> {
      dispatch({type:'SET_TOTAL_ITEMS',payload:data.length})
    },[data])

    const startIndex = (paginationState.currentPage-1)*itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const displayedItems = data.slice(startIndex,endIndex);

  return (
    <div>
        <h1>Pagination Example</h1>
        <ul>
          {displayedItems.map((item,index)=> (
            <li key={index}>{item}</li>
          ))}
        </ul>
    </div>
  )
}
