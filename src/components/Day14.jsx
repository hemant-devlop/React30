import React, { useState } from 'react'

const Day14 = () => {
  const[selectColor,setSelectColor]=useState('#000000')
  const handlleColor=(e)=>{
    setSelectColor(e.target.value)
  }
  return (
    <div style={{display:'flex', justifyContent:"center", flexDirection:'column', alignItems:'center'}}>
      <input type="color" onChange={handlleColor}/><br />
      <div style={{border:'2px solid black', height:'100px', width:'100px', backgroundColor:selectColor}}>

      </div>
    </div>
  )
}

export default Day14
