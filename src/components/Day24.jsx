import React, { useState } from 'react'
import './styles/Day24.css'

const Day24 = () => {
    const [inputValue, setInputValue] = useState('')
    const [todos, setTodo] = useState([])
    const [itemId, setItemid] = useState({ id: null, status: false })

    //todo item  add funk
    const handleAdd = () => {
        if(inputValue.trim()!==''){
            const newTodo = {
                id: new Date().getTime(),
                text:[...inputValue[0].toUpperCase()]+inputValue.slice(1)
            }
            setTodo([...todos, newTodo])
            setInputValue('')
        }else{
            alert('enter todo inputs')
        }
    }
    //todo item funck delete
    const handleDelete = (id) => {
        const deleteTodo = todos.filter((item) => item.id !== id)
        setTodo(deleteTodo)
    }

    //todo item edit click
    const handleEdit = (item) => {
        setInputValue(item.text)
        setItemid({ ...itemId, id: item.id, status: true })

    }
    //todo item update
    const handleUpdate = () => {
        const updateTodo = todos.map(item => item.id === itemId.id ? { ...item, id: item.id, text: inputValue } : item)
        // console.log(updateTodo)
        setTodo(updateTodo)
        setInputValue('')
        setItemid({ ...itemId, status: false })
    }
    return (
        <div className='todo-menu'>
        <h2>Todo App</h2>
            <div className='todo-input'>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder='input todo' />
            {itemId.status ? <button onClick={handleUpdate}>update</button> : <button onClick={handleAdd}>add</button>}

            </div>
            <table style={{borderCollapse:'collapse'}}>
                <tbody className='todo-tr'>
                    {todos.map((item,i) => <tr  key={item.id}>
                        <td className='todo-td'>{i+1}.{item.text}</td>
                        <td className='todo-td'><button onClick={() => handleDelete(item.id)}>Delete</button></td>
                        <td className='todo-td'><button onClick={() => handleEdit(item)}>edit</button></td>
                    </tr>)}
                </tbody>
            </table>
        </div> 
    )
}

export default Day24
