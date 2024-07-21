import React from 'react'
import './styles/Day15.css'
import { useState } from 'react'

const Day15 = () => {
  //toggle menu
  const [isvisible,setIsvisible]=useState(false)
  const handleMenu=()=>{
    setIsvisible(!isvisible)
  }
  return (
    <div className='menu'>
      <button className='ham-btn' onClick={handleMenu}>☰</button>
      <ul className={`list ${isvisible?'open':''}`}>
        <li>Home</li>
        <li>About</li>
        <li>Service</li>
        <li>Product</li>
      </ul>
    </div>
  )
}

export default Day15
