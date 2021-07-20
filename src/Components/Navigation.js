import React from 'react'
import '../Styles/buttons.css'

export default function Navigator(props) {
    return (
        <div className="nav-buttons">
            <button onClick={props.btnBackHandler}>Back</button> 
            <button onClick={props.deleteHandler}>Delete</button>
            <button onClick={props.editOpener}>Edit</button>
            <button onClick={props.createOpener}>New</button>
            <button onClick={props.btnNextHandler}>Next</button> 
        </div>
    )
}