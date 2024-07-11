import React, { useState } from 'react'

const Day9 = () => {
    const[file,setFile]=useState(null)
    //image as input file
    const handleAdd=(e)=>{
        const selectedImg=e.target.files[0]
        console.log(selectedImg)
        setFile(selectedImg)
    }
  return (
    <div>
      <h2>select image</h2>
      <input type="file" accept='image/jpeg' onChange={handleAdd} />
      {file && <img src={URL.createObjectURL(file)} alt='uploaded'/>}
    </div>
  )
}

export default Day9
