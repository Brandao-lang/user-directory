import React from 'react'
import '../Styles/buttons.css'

export default function Navigator(props) {
    return (
        <div className="nav-buttons">
            <button className="nav-btn" onClick={props.btnBackHandler}><svg className="arrow" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg></button> 
            <button className="changer-btn" onClick={props.editOpener}>Edit</button>
            <button className="changer-btn" onClick={props.deleteHandler}>Delete</button>
            <button className="changer-btn" onClick={props.createOpener}>New</button>
            <button className="nav-btn" onClick={props.btnNextHandler}><svg className="arrow" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg></button> 
        </div>
    )
}