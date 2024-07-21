import React, { useReducer, useState } from 'react'

const reducer = (state, action) => {
    switch (action.type) {
        case 'move':
            return {
                ...state, top: action.payload.top, left: action.payload.left
            }
       default :
       return state
    }
}
const Day22 = () => {
    const [state, dispatch] = useReducer(reducer, { top: 0, left: 0 })
    const [isdragged, setIsdragged] = useState(false)
    const [initialY, setInitialY] = useState(0)
    const [initialX, setInitialX] = useState(0)

    const handleMouseDown = (e) => {
        setIsdragged(true);
        setInitialX(e.clientX - state.left)
        setInitialY(e.clientY - state.top)
    }
    const handleMouseUp = () => {
        setIsdragged(false)
    }
    const handleMouseMove = (e) => {
        if (isdragged) {
           const top = e.clientY - initialY;
            const left = e.clientX - initialX;
            console.log(top,left)
            dispatch({type:'move',payload: { top, left }});
        }
    };
    return (
        <div onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            style={{ top: state.top, left: state.left, position: 'absolute', cursor: 'pointer', backgroundColor:isdragged?'green':'red', height:'200px', width:'200px'}}>
            click me
        </div>
    )
}

export default Day22
