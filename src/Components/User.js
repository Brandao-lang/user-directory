import React from 'react'
import data from '../data';
import '../Styles/users.css'
import Delete from './Delete';

export default function User (props) {
    return (
       <div className="user-card">
           <h1 className="counter">{props.currentUser+1}/25</h1>
            <div className="user-bio">
                <h1>{data[props.currentUser].name.first} {data[props.currentUser].name.last}</h1>
                <span><strong>From: </strong>{data[props.currentUser].city}</span>
                 <br/>
                <span><strong>Job Title: </strong>{data[props.currentUser].title}</span>
                <br/>
                <span><strong>Employer: </strong>{data[props.currentUser].employer}</span>
            </div>
            <div className="movies">
                <h2>Favorite Movies:</h2>
                <ol>
                    <li>
                    {data[props.currentUser].favoriteMovies[0]}
                    </li>
                    <li>
                    {data[props.currentUser].favoriteMovies[1]}
                    </li>
                    <li>
                    {data[props.currentUser].favoriteMovies[2]}
                    </li>
                </ol>
            </div>
            <button onClick={props.btnBackHandler}>Back</button> 
            <button onClick={props.btnNextHandler}>Next</button> 
            <Delete currentUser={props.currentUser} data={data}/>
        </div> 
    )
}