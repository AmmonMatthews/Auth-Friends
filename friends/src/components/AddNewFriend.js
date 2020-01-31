import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';



const AddNewFriend = props => {

    const [newFriend, setNewFriend] = useState({
        id: Date.now(),
        name: "",
        age: "", 
        email: ""
    });

    const handleChanges = e => {
        setNewFriend({...newFriend, [e.target.name]: e.target.value})
        
    }

    const handleAdd = e => {
        e.preventDefault();
        axiosWithAuth()
            .post('/api/friends', newFriend)
    
            .catch(err => console.log(err))
            props.history.push('/friends')
    }


    return(
        <form onSubmit={handleAdd}>
            <label htmlFor="name">Name:</label>
            <input
            id="name"
            name="name"
            type="text"
            placeholder="name"
            value={newFriend.name}
            onChange={handleChanges}
            />

            <label htmlFor="age">Age:</label>
            <input
            id="age"
            name="age"
            type="text"
            placeholder="age"
            value={newFriend.age}
            onChange={handleChanges}
            />

            <label htmlFor="email">Email:</label>
            <input
            id="email"
            name="email"
            type="text"
            placeholder="email"
            value={newFriend.email}
            onChange={handleChanges}
            />

            <button>Add Friend</button>

        </form>

    )
};

export default AddNewFriend;