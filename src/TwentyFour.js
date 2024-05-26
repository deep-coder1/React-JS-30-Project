// Create a user authentication system using useContext to manage user login and logout states.

import React from 'react'
import { useAuth } from './AuthContext'

export default function TwentyFour() {

    const {user,login} = useAuth();

  return (
    <div>
        <h1>User Authentication Example</h1>
        <div>
            <p>Welcome, {user.username}</p>
            <button>Logout</button>

            <button onClick={()=>login({username:'user12345'})}>Login</button>
        </div>
    </div>
  )
}
