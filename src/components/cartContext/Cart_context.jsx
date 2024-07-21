import { useContext } from "react";
import { useReducer } from "react";
import { createContext } from "react";
//cartt context
export const CartContext=createContext();

//initial state
const initialState={
  cart:[],
}

//reducer func
const cartReducer=(state,action)=>{
  switch(action.type){
    case 'add':
      const cartItem=state.cart.find(item=>item.id===action.payload.id)
      if(cartItem){
        return{
          ...state,
          cart:state.cart.map(item=>item.id===action.payload.id?{...item,quantity:item.quantity+1}:item)
        }
      }else{
        return{
          ...state,
          cart:[...state.cart,{...action.payload,quantity:1}]
        }
      }
    case 'del':
      return{
        ...state,
        cart:state.cart.filter(item=>item.id!==action.payload.id)
      }
    case 'inc':
      return {
        ...state,
        cart:state.cart.map(item=>item.id===action.payload.id && item.quantity <10?{...item,quantity:item.quantity+1}:item)
      }
    case 'dec':
      return {
        ...state,
        cart:state.cart.map(item=>item.id===action.payload.id && item.quantity >1?{...item,quantity:item.quantity-1}:item)
      }
  }
}
export const CartProvider=({children})=>{
  const[state,dispatch]=useReducer(cartReducer,initialState);
  return(
    <CartContext.Provider value={{state,dispatch}}>
      {children}
    </CartContext.Provider>
  )
}
//custom hook for consume context
export const useCart=()=>{
  return useContext(CartContext)
}