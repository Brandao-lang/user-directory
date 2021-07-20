import React from 'react'
import { useFormik } from 'formik'
import Modal from 'react-modal'


Modal.setAppElement('#root')
export default function NewUser (props) {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            location: '',
            occupation: '',
            employer: '',
            movieOne: '',
            movieTwo: '',
            movieThree: ''
        },
        onSubmit: (values, {resetForm}) => {
            const user = {id: props.userData.length+1,
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
            props.addHandler(user)
            resetForm({ vlaues: ''})
        },
        validate: values => {
            let errors = {}

            if(!values.firstName) {
                errors.firstName = 'Required'
            }
            
            if(!values.lastName) {
                errors.lastName = 'Required'
            }

            return errors
        }
    })

  return (
       <div className="form">
           <Modal isOpen={props.createIsOpen}
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
                placeholder="required"
                onChange={formik.handleChange}
                value={formik.values.firstName}
            />
        <br/>
            <label htmlFor="lastName">Last Name </label>
                <input
                 id="lastName"
                 name="lastName"
                  type="text"
                  placeholder="required"
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
            <button type="submit">Add User</button>
        </form>
        <button  onClick={props.createOpener}>Close</button>
        </Modal> 
        </div>
      )
    }