import React, { useState } from "react";

export default function Thirteen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h2>Welcome , {email}!</h2>
          <button>Logout</button>
        </div>
      ) : (
        <div>
          <form>
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button>{isRegistered ? "Login" : "Register"}</button>
          </form>
          <p>
            {isRegistered
              ? "Dont have an account? Register now"
              : "Already have an account? Log in!"}
          </p>
          <button onClick={() => setIsRegistered(!isRegistered)}>
            {isRegistered ? "Register" : "Login"}
          </button>
        </div>
      )}
    </div>
  );
}
// {
  /* <form>
            <input type='email' placeholder='Email' onChange={(e)=> setEmail(e.target.value)}/>
            <input type='password' placeholder='Password' onChange={(e)=> setPassword(e.target.value)}/>
            <button>
                {isRegistered ? 'Login':'Register'}
            </button>
        </form>
        <p>
            {isRegistered ? "Dont have an account? Register now" : "Already have an account? Log in!"}
        </p>
        <button onClick={()=> setIsRegistered(!isRegistered)}>
            {isRegistered ? 'Register': 'Login'}
        </button>
    </div>
  )
} */
// }
