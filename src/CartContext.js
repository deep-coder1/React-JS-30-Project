import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const initialState = {
    cartItems: [],
  };

  function cartReducer(state, action) {
    console.log(state, action);
    switch (action.type) {
      case "ADD_TO_CART":
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
        };
    }
  }

  const [cartState, cartDispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
