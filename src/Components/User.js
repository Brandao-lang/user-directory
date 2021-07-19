import '../Styles/users.css'


export default function User (props) {
    
    return (
       <div className="user-card">
           <h1 className="counter">{props.currentUser+1}/{props.userData.length}</h1>
            <div className="user-bio">
                <h1>{props.userData[props.currentUser].name.first} {props.userData[props.currentUser].name.last}</h1>
                <span><strong>From: </strong>{props.userData[props.currentUser].city}</span>
                 <br/>
                <span><strong>Job Title: </strong>{props.userData[props.currentUser].title}</span>
                <br/>
                <span><strong>Employer: </strong>{props.userData[props.currentUser].employer}</span>
            </div>
            <div className="movies">
                <h2>Favorite Movies:</h2>
                <ol>
                    <li>
                    {props.userData[props.currentUser].favoriteMovies[0]}
                    </li>
                    <li>
                    {props.userData[props.currentUser].favoriteMovies[1]}
                    </li>
                    <li>
                    {props.userData[props.currentUser].favoriteMovies[2]}
                    </li>
                </ol>
            </div>
        </div> 
    )
}