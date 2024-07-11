import React, { useState } from 'react'

const Day4 = () => {

    //toggler project
    const[toggle,setToggle]=useState(true)
    const handleToggle=()=>{
        setToggle(!toggle)
    }
  return (
    <div>
    <h3>light is {toggle?<span style={{backgroundColor:'yellow'}}>on</span>:<span style={{backgroundColor:'black',color:'#fff'}}>off</span>}</h3>
    {/* <span>light is {toggle?"on":"off"}</span><br /> */}
    {/* <button onClick={handleToggle}>{toggle?"off":"on"}</button><br /> */}
    <input type="checkbox" onClick={handleToggle}/>
    </div>
  )
}

export default Day4

