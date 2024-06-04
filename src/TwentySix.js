// Create a localization system using useContext to provide translations for the entire app.

import React from 'react'
import { useLocation } from 'react-router-dom'

export default function TwentySix() {

  const {setLocale,locale} = useLocation();
  console.log(locale);

    const handleLocalChange = (newLocale) => {
        setLocale(newLocale)
    }

  return (
    <div>
        <button onClick={()=> handleLocalChange('en')}>English</button>
        <button onClick={()=> handleLocalChange('es')}>Espanol</button>
    </div>
  )
}
