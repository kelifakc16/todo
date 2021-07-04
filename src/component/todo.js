import React from 'react'
import { MdDeleteForever } from 'react-icons/md';

export default function Todo(props) {
    return (
        <>
            <div className='task-button flex-row'>
                <h5 style={{ fontSize: '15px', textAlign: 'center' }}>{props.title}</h5>
                <div className='icon'>
                   
                    <MdDeleteForever type="button" onClick={props.delete} />

                </div>
            </div>

        </>

    )
}
