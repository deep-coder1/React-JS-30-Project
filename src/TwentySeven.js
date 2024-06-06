// Fetch data from multiple APIs and display the combined data in your component.s

import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function TwentySeven() {

    const [data1,setData1] = useState([]);

    useEffect(()=> {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
            setData1(response.data)
        })
    })
  return (
    <div>TwentySeven</div>
  )
}
