import React from 'react'

export default function Navigator(props) {
    return (
        <div className="nav-buttons">
             <button onClick={props.btnBackHandler}>Back</button> 
            <button onClick={props.btnNextHandler}>Next</button> 
            <button onClick={props.deleteHandler}>Delete</button>
        </div>
    )
}