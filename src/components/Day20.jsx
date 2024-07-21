import React, { useEffect, useReducer } from 'react'

const itemPerPage = 5;

const Day20 = () => {
    //pagination
    
    //reducer func
    const reducer = (state, action) => {
        switch (action.type) {
            case 'next':
                return {...state, currentPage: action.payload }
            case 'prev':
                return {...state, currentPage: action.payload }
            default : {
                state
            }
         
        }
    }
    //usereducer
    const [state, dispatch] = useReducer(reducer, {
        currentPage: 1,
    })

    // array of 25
    const data = Array.from({ length: 25 }, (_, i) => `item ${i + 1}`)
    
    
    const firstIndex = (state.currentPage - 1) * itemPerPage;
    const lastIndex = firstIndex + itemPerPage;
    const indexPage = data.slice(firstIndex, lastIndex)
    return (
        <div>
            <ul>{indexPage.map((item, ind) => <li key={ind}>{item}</li>)}</ul>
            <button onClick={()=>dispatch({type:'prev',payload:state.currentPage-1})} disabled={state.currentPage===1}>previous</button>
            <button onClick={()=>dispatch({type:'next',payload:state.currentPage+1})} disabled={lastIndex>=data.length}>next</button>
        </div>
    )
}

export default Day20
