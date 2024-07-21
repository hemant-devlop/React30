import React, { useReducer, useState } from 'react'

const Day19 = () => {
    // to do app
    const reducer=(state,action)=>{
        switch(action.type){
            case 'add':
                return [...state,{id:Date.now(),text:action.payload,complete:false}]
            case 'delete':
                return state.filter(item=>item.id!==action.payload)
            case 'done':
                return state.map(item=>item.id===action.payload?{...item,complete:!item.complete}:item)
        }
    }
    const[state,dispatch]=useReducer(reducer,[])
    const[task,setTask]=useState('');
  return (
    <div>
    <input type="text" value={task}  onChange={(e)=>setTask(e.target.value)} placeholder='write your today task' />
    <button onClick={()=>dispatch({type:'add',payload:task})}>add</button>
    {state.map(tasks=><li key={tasks.id} style={{textDecoration:tasks.complete?'line-through':'none'}}>{tasks.text} <button onClick={()=>dispatch({type:'done',payload:tasks.id})}>✔</button> <button onClick={()=>dispatch({type:'delete',payload:tasks.id})}>X</button> </li>)}
    </div>
  )
}

export default Day19
