import React, { useState } from 'react'

const Day6 = () => {
    //changed background color on click
    const[backgroundColor,setBackgroundColor]=useState('yellow');
    const handleColor=()=>{
        const color=backgroundColor==='yellow'?"green":'yellow'
        setBackgroundColor(color)
        console.log(color)
    }
  return (
    <div>
      <h2 style={{
        backgroundColor,
        padding:'20px 30px',
        border:'2px solid black'
      }}>Hemant kumar</h2>
      <button onClick={handleColor}>change</button>
    </div>
  )
}

export default Day6
