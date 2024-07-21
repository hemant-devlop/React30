import React from 'react'
import { useCount } from './cartContext/Cart_context18'

const Day18 = () => {
  //counter using useReducer
    const{state,dispatch}=useCount();
  return (
    <div>
      <h2>couter using reducer</h2>
        <button onClick={()=>dispatch({type:'dec'})}>-</button>
        <span>{state.count}</span>
        <button onClick={()=>dispatch({type:'inc'})}>+</button>
        <button onClick={()=>dispatch({type:'reset'})}>reset</button>
    </div>
  )
}

export default Day18
