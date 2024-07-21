import React, { createContext, useContext, useReducer } from 'react'

export const CounterContext=createContext();

const reducer=(state,action)=>{
    if(action.type=='inc'){
        return{
            count:state.count+1
        }
    }else if(action.type==='dec'){
        return {
            count:state.count-1
        }
    }else if(action.type==='reset'){
        return {
             count:0
        }
    }
}
export const CounterProvider=({children})=>{
   const[state,dispatch]=useReducer(reducer,{count:0});
    return (
        <CounterContext.Provider value={{state,dispatch}}>
            {children}
        </CounterContext.Provider>
    )
}
export const useCount=()=>{
    return useContext(CounterContext);
}