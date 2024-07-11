import React, { useState } from 'react'

const Day10 = () => {
    const[userData,setUserData]=useState({
        email:'',
        password:''
    })
    const[islog,setIslog]=useState(false)
    const users=Object.freeze({
        user1:'user1@mail.com',
        pass:'1234'
    })
    const handleLogout=()=>{
        localStorage.removeItem('logged')
        setUserData({
            email:'',
            password:''
        })
        setIslog(false)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(users.user1===userData.email && users.pass===userData.password){
            alert('user is logged in success fully')
            setIslog(true)
            localStorage.setItem('logged',true)
        }else{
            alert('wrong credentials')
        }

    }
  return (
    <div>
      {islog?
      <>
      <h2>your welcome in the application</h2>
      <button onClick={handleLogout}>logout</button>
      </>
      :<form onSubmit={handleSubmit}>
      <input type="email" name='email' value={userData.email} onChange={(e)=>setUserData({...userData,[e.target.name]:e.target.value})} /><br />
      <input type="password" name='password' value={userData.password} onChange={(e)=>setUserData({...userData,[e.target.name]:e.target.value})} /> <br />
      <button type='submit'>Login</button>

      </form>}
    </div>
  )
}

export default Day10
