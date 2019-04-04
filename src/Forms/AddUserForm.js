import React, { useState } from 'react';

const AddUserForm = props => {
    const POSTCODE_FINDER_API = "https://api.postcodes.io/postcodes/"

    const initialFormState = { id: null, name: "", postcode: "", telephone: "", email: "" };
    const [user, setUser] = useState(initialFormState);

    const handleInputChange = event => {
        const { name, value } = event.target
        console.log(event)
        setUser({ ...user, [name]: value })
    }

    return (
        <form
            onSubmit={event => {
                event.preventDefault()
                if (!user.name || !user.postcode || !user.telephone || !user.email) return

                props.addUser(user)
                setUser(initialFormState)
            }}>
            <label>Name</label>
            <input type="text" name="name" value={user.name} onChange={handleInputChange}></input>
            <label>Postcode</label>
            <input type="text" name="postcode" value={user.postcode} onChange={handleInputChange}></input>
            <label>Telephone</label>
            <input type="text" name="telephone" value={user.telephone} onChange={handleInputChange}></input>
            <label>Email</label>
            <input type="email" name="email" value={user.email} onChange={handleInputChange}></input>
            <button>Add new user</button>
        </form>
    )
}

export default AddUserForm;