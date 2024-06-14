// Create a different route pages component using useEffect to update
// the document title with the visited page whenever it changes.

import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function Thirty() {
  return (
    <BrowserRouter>

    <div>
        <Routes>
            <Route path='/'></Route>
            <Route></Route>
            <Route></Route>
        </Routes>
    </div>
    </BrowserRouter>
  )
}
