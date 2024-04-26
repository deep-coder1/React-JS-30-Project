// Develop a pagination component to navigate through a large list of items.
import React, { useState } from 'react'

export default function Sixteen({items, itemsPerPage}) {

    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastItem = currentPage*itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem,indexOfLastItem);

    // console.log(currentItems);

    const pageNumber = [];
    for(let i=1;i<=Math.ceil(items.length / itemsPerPage); i++){
        pageNumber.push(i)
    }

  return (
    <div>
        <ul>
            {currentItems.map((item,index)=> {
                return <li key={index}>{item}</li>
            })}
            {pageNumber.map((number)=>(
                <li key={number} onClick={()=> setCurrentPage(number)}>{number}</li>
            ))}
        </ul>
    </div>
  )
}
