import React, { useState } from 'react'

const Day8 = () => {
  //copy to clipboard
    const[text,setText]=useState('')
    const[message,setMessage]=useState('')
    const handlecopy=()=>{
        navigator.clipboard.writeText(text).then(()=>{
            setMessage('copy')
        }).catch(()=>
            setMessage("failed")
        )
    }
    setTimeout(() => {
        setMessage('')
    }, 1500);
  return (
    <div>
      <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
      <button onClick={handlecopy}>copy</button>
      {message && <p>{message}</p>}
    </div>
  )
}

export default Day8
