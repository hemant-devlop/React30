import React, { useReducer } from 'react'
const initialState={
    currentImg:0,
}
const reducer=(state,action)=>{
    switch(action.type){
        case 'next_img':
            return{
                currentImg:state.currentImg+1
            }
        case 'prev_img':
            return{
                currentImg:state.currentImg-1
            }
        default :
        return state
    }
}
const Day23 = () => {
    const[state,dispatch]=useReducer(reducer,initialState)
    const images=[
        'https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/206585/pexels-photo-206585.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/245388/pexels-photo-245388.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/1386608/pexels-photo-1386608.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/341970/pexels-photo-341970.jpeg?auto=compress&cs=tinysrgb&w=600'
    ]

    const currentImage=images[state.currentImg]
  return (
    <div style={{display:'flex',alignItems:'center', flexDirection:'column'}}>
      <div><img src={currentImage} height='400px'/></div>
      <div>
        <button onClick={()=>dispatch({type:'prev_img'})}>prev</button>
        <span>{state.currentImg+1}</span>
        <button onClick={()=>dispatch({type:'next_img'})}>next</button>
      </div>
    </div>
  )
}

export default Day23
