import React from 'react'
import { useFormik } from 'formik'

export default function EditUser(props) {
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            firstName: props.userData[props.currentUser].name.first,
            lastName: props.userData[props.currentUser].name.last
        },
        onSubmit: values => {
            const update = {id: props.currentUser,
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
            
            props.editHandler(update)
        },
        
    })

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
        <button type="submit">Save Changes</button>
  </form>
  
    )

}