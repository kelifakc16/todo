import React, { useState } from 'react'
import Todo from './todo'

export default function Testtodo() {
    const [title, setTitle] = useState('');
    const [list, setList] = useState([]);

    function addList() {
        setList([...list, title])
        setTitle('')
    }
  
    function onPresDelete(num) {
        const result = list.filter(word => word != num);
        setList(result)
    }
    return (
        <>
            <div className='todo'>
                <div className='app'>
                    <h1> Todo-list</h1>
                    <div className='inputTodo flex flex-row'>
                        <input type='text' placeholder='Enter a Todo..' className='task' onChange={event => setTitle(event.target.value)} value={title} />
                        <button className='addbtn' type='submit' onClick={() => addList()}>Add</button>

                    </div>
                    {/* <Todo /> */}
                    {list.map(function (num) {
                        return <Todo title={num}  delete={() => onPresDelete(num)} />

                    })}

                </div>
            </div>
        </>
    )
}
