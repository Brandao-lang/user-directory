import React from 'react'
import { useFormik } from 'formik'

export default function NewUser (props) {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: ''
        },
        onSubmit: (values, {resetForm}) => {
            const test = {id: props.userData.length+1,
            name: {first: formik.values.firstName, last: formik.values.lastName},
            city: "Likiep",
            country: "Marshall Islands",
            employer: "Twinder",
            title: "Physical Therapy Assistant",
            favoriteMovies: [
            "That Night in Varennes (Nuit de Varennes, La)",
            "Spy(ies) (Espion(s))",
            "Klip (Clip)"
    ]
  }
            props.addHandler(test)
            console.log(props.userData)
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

    let test = formik.values.firstName
    
    
    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input
                id="firstName"
                name="firstName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.firstName}
            />
        <br/>
            <label htmlFor="lastName">Last Name</label>
                <input
                 id="lastName"
                 name="lastName"
                  type="text"
                  onChange={formik.handleChange}
                 value={formik.values.lastName}
            />
        <br/>
            
        <br/>
            <button type="submit">Add User</button>
      </form>
      
    )
}