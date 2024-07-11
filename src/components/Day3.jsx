import React from 'react'

const Day3 = () => {
    //show inputs text below the fields
    
    const [user, setUser] = React.useState({
        fname: 'Hemant',
        lname: 'kumar'
    })
    const handlesubmit = (e) => {
            setUser({
                ...user,[e.target.name]:e.target.value
            })
    }
    return (
        <div>
            <input type="text" name='fname' value={user.fname} placeholder='name' onChange={handlesubmit}/><br />
            <input type="text" name='lname' value={user.lname} placeholder='last' onChange={handlesubmit}/><br /><br />
            <h4>{user.fname} {user.lname}</h4>
        </div>
    )
}

export default Day3
