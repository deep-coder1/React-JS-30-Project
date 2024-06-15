// Create a different route pages component using useEffect to update
// the document title with the visited page whenever it changes.

import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home30 from './Home30'
import About30 from './About30'

export default function Thirty() {
  return (
    <BrowserRouter>

    <div>
        <Routes>
            <Route path='/' element={<Home30/>}></Route>
            <Route path='/about' element={<About30/>}></Route>
        </Routes>
    </div>
    </BrowserRouter>
  )
}
