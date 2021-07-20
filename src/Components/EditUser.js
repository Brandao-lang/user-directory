import React from 'react'
import { useFormik } from 'formik'
import Modal from 'react-modal'

export default function EditUser(props) {
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            firstName: props.userData[props.currentUser].name.first,
            lastName: props.userData[props.currentUser].name.last,
            location: props.userData[props.currentUser].city,
            occupation: props.userData[props.currentUser].title,
            employer: props.userData[props.currentUser].employer,
            movieOne: props.userData[props.currentUser].favoriteMovies[0],
            movieTwo: props.userData[props.currentUser].favoriteMovies[1],
            movieThree: props.userData[props.currentUser].favoriteMovies[2]
        },
        onSubmit: values => {
            const update = {id: props.currentUser,
                name: {first: formik.values.firstName, last: formik.values.lastName},
                city: formik.values.location,
                country: "Marshall Islands",
                employer: formik.values.employer,
                title: formik.values.occupation,
                favoriteMovies: [
                formik.values.movieOne,
                formik.values.movieTwo,
                formik.values.movieThree
        ]
      }
            props.editHandler(update)
        },
    }
)

    return (
    <div className="form">
        <Modal isOpen={props.editorIsOpen} 
           style={
               {
                 overlay: {
                     textAlign: 'center',
                 },
                 content: {
                     width: '20vw',
                     height: '30vh',
                     margin: '0 auto'
                 }
             }
           }
         >
        <form onSubmit={formik.handleSubmit}>
        <label htmlFor="firstName">First Name </label>
        <input
            id="firstName"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.firstName}
        />
    <br/>
        <label htmlFor="lastName">Last Name </label>
            <input
             id="lastName"
             name="lastName"
              type="text"
              onChange={formik.handleChange}
             value={formik.values.lastName}
        />
    <br/>
        <label htmlFor="location">Location </label>
                <input
                 id="location"
                 name="location"
                  type="text"
                  placeholder="optional"
                  onChange={formik.handleChange}
                 value={formik.values.location}
            />
        <br/>
        <label htmlFor="occupation">Occupation </label>
                <input
                 id="occupation"
                 name="occupation"
                  type="text"
                  placeholder="optional"
                  onChange={formik.handleChange}
                 value={formik.values.occupation}
            />
        <br/>
        <label htmlFor="employer">Employer </label>
                <input
                 id="employer"
                 name="employer"
                  type="text"
                  placeholder="optional"
                  onChange={formik.handleChange}
                 value={formik.values.employer}
            />
        <br/>
        <label htmlFor="movieOne">Favorite Movie (1) </label>
                <input
                 id="movieOne"
                 name="movieOne"
                  type="text"
                  placeholder="optional"
                  onChange={formik.handleChange}
                 value={formik.values.movieOne}
            />
        <br/>
        <label htmlFor="movieTwo">Favorite Movie (2) </label>
                <input
                 id="movieTwo"
                 name="movieTwo"
                  type="text"
                  placeholder="optional"
                  onChange={formik.handleChange}
                 value={formik.values.movieTwo}
            />
        <br/>
        <label htmlFor="movieThree">Favorite Movie (3) </label>
                <input
                 id="movieThree"
                 name="movieThree"
                  type="text"
                  placeholder="optional"
                  onChange={formik.handleChange}
                 value={formik.values.movieThree}
            />
        <br/>
    <br/>
        <button type="submit">Save Changes</button>
  </form>
  <button onClick={props.editOpener}>Close</button>
        </Modal> 
        </div>
  
    )

}