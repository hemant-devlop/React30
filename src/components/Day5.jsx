import React, { useEffect, useState } from 'react'

const Day5 = () => {
    //timer project
    const [timer,setTimer]=useState(999);
    if(timer===0){
        alert('your are now winner')
    }
    useEffect(()=>{
        if(timer>0){
            const time=setTimeout(() => {
                setTimer(timer-1)
            }, 1000);
            return ()=>{
                clearTimeout(time)
            }
        }
        
    },[timer])
  return (
    <div>
      <h2>offer valid:{timer}</h2>
    </div>
  )
}

export default Day5
