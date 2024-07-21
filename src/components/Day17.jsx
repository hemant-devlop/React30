import React from 'react'
import { useCart } from './cartContext/Cart_context'

const Day17 = () => {
  const products=[
    {name:'product001',id:1},
    {name:'product002',id:2},
    {name:'product003',id:3},
    {name:'product004',id:4},
  ]
  const{state,dispatch}=useCart();
  const addToCart=(product)=>{
    dispatch({type:'add',payload:product})
  }
  // delete cart
  const deleteCart=(product)=>{
    dispatch({type:'del',payload:product})
  }
  // increment
  const increment=(product)=>{
    dispatch({type:'inc',payload:product})
  }
  //decrement
  const decrement=(product)=>{
    dispatch({type:'dec',payload:product})
  }
  return (
    <div>
    <h2>cart Products</h2>
    <ul>
      {state.cart.map(prod=><li key={prod.id}>{prod.name} <button onClick={()=>decrement(prod)}>-</button>{prod.quantity}<button onClick={()=>increment(prod)}>+</button> <button onClick={()=>deleteCart(prod)}>X</button></li>)}
    </ul>
      <h2>shoping Products</h2>
      <ul>
        {products.map(prod=><li key={prod.id}>{prod.name} <button onClick={()=>addToCart(prod)}>add to cart</button></li>)}
      </ul>
    </div>
  )
}

export default Day17
