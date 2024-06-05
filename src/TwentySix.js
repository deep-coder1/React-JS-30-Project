// Create a localization system using useContext to provide translations for the entire app.

import React from 'react'
import { useLocalization } from './LocalizationContext';

export default function TwentySix() {

  const {setLocale,locale,translate} = useLocalization();
  // console.log(locale);

    const handleLocalChange = (newLocale) => {
        setLocale(newLocale)
    }

  return (
    <div>
      <h1>{translate('greeting')}</h1>
      <h1>{translate('welcome')}</h1>
        <button onClick={()=> handleLocalChange('en')}>English</button>
        <button onClick={()=> handleLocalChange('es')}>Espanol</button>
    </div>
  )
}
