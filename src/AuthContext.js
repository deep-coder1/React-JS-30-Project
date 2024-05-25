import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({children}){

    const[user,setUser] = useState(null);

    const login = (userData) =>

    return {
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    }
}

export function useAuth(){
    return useContext(AuthContext);
}