import { createContext, useContext } from "react";

const CartContext = createContext();

export function CartProvider({children}){
    return <CartContext.Provider></CartContext.Provider>
}

export function useCart {
    return useContext(CartContext);
}