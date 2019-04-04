import React, { useState, useEffect } from 'react'

const EditUserForm = props => {
    const [user, setUser] = useState(props.currentUser)

    const handleInputChange = event => {
        const { name, value } = event.target

        setUser({ ...user, [name]: value })
    }

    useEffect(() => {
        setUser(props.currentUser)
    }, [props])

    return (
        <form
            onSubmit={event => {
                event.preventDefault()

                props.updateUser(user.id, user)
            }}
        >
            <label>Name</label>
            <input type="text" name="name" value={user.name} onChange={handleInputChange}></input>
            <label>Postcode</label>
            <input type="text" name="postcode" value={user.postcode} onChange={handleInputChange}></input>
            <label>Telephone</label>
            <input type="text" name="telephone" value={user.telephone} onChange={handleInputChange}></input>
            <label>Email</label>
            <input type="email" name="email" value={user.email} onChange={handleInputChange}></input>
            <button>Update user</button>
            <button onClick={() => props.setEditing(false)} className="button muted-button">
                Cancel
      </button>
        </form>
    )
}

export default EditUserForm