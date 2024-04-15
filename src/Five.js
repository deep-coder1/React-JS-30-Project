// Implement a basic toggle switch component. (5)
import React, { useState } from 'react'

export default function Five() {
    
    const [isToggle, setIsToggles] = useState(false);

    const handleToggle = () => {
        setIsToggles(!isToggle);
    }
  return (
    <div>
        <label>
            <input type='checkbox' onChange={handleToggle} />
        </label>
        <p>{isToggle ? "On" : "Off"}</p>
    </div>
  )
}
