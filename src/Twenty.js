// Implement a shopping cart using context and a reducer, with features like adding, removing, and updating items in the cart.
import React from 'react'
import { useCart } from './CartContext'

export default function Twenty() {
    
    const {cartState,cartDispatch} = useCart();
    const addToCart = (item) => {
        //
    }

    const products = [
        {id: 1,name:'Product A'},
        {id: 2,name:'Product B'},
        {id: 3,name:'Product C'  }
    ]
  return (
    <div>
        <h2>Shopping Cart</h2>
        <h2>Product List</h2>
        <ul>
            {products.map((product)=> (
                <li key={product.id}>
                    {product.name} <button onClick={()=>addToCart(product)}>Add to Cart</button>
                </li>
            ))}
        </ul>
    </div>
  )
}
