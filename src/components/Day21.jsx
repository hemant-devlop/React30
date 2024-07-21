import React from 'react'
import { useAuth } from './cartContext/ContextLogin'

const Day21 = () => {
    const{user,login,logout}=useAuth();
    console.log(user)
  return (
    <div>
      <h2>user authentication</h2>
      {user?(<>
        <h2>welcome,{user.userName}</h2>
        <button onClick={()=>logout()}>Logout</button>
        </>
      ):(
      <button onClick={()=>login({userName:'user123'})}>login</button>
      )}
    </div>
  )
}

export default Day21
