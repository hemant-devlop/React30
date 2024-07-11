import React from 'react'

const Day2 = () => {
  //counter
    const [count, setCount] = React.useState(0)
  return (
    <div>
      <button onClick={() => setCount(count - 1)}>-</button>
      <span style={{ padding: '1rem',fontWeight:'500' }}>{count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  )
}

export default Day2
