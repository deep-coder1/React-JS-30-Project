// Build a timer that counts down from a specified time.
// Timer (7) || React JS 30+ Project

import React, { useEffect, useState } from 'react'

export default function Seven() {

    const [time, setTime] = useState(60);

    useEffect(()=>{
        if(time>0){
            const timer = setTimeout(()=> setTime(time-1),1000);
            return ()=> clearTimeout(timer);
        }
    })
    
  return (
    <div>
        Time Left: {time} second
    </div>
  )
}
