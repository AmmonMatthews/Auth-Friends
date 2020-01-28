import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';



const AddNewFriend = props => {

    const [newFriend, setNewFriend] = useState({
        id: Date.now(),
        name: "",
        age: "", 
        email: ""
    });
    
    const [friends, setFriends] = useState([]);
    
    useEffect(() => {
        axiosWithAuth()
            .get("/api/friends")
            .then(res => {
                console.log(res)
                setFriends(res.data)
            })
            .catch(err => {
                console.log("unable to grab friends", err)
            })
            return () => {
                return friends
            }
    },[])

    const handleChanges = e => {
        setNewFriend({...newFriend, [e.target.name]: e.target.value})
        
    }

    const handleAdd = e => {
        e.preventDefault();
        axiosWithAuth()
            .post('/api/friends', newFriend)
            .then(res => {
                console.log(res);
                setFriends({...friends, newFriend})
            })
                
            .catch(err => console.log(err))
            props.history.push('/friends')
    }


    return(
        <form onSubmit={handleAdd}>
            <label htmlFor="name">Name:</label>
            <input
            id="name"
            name="name"
            type="test"
            value={newFriend.name}
            onChange={handleChanges}
            />

            <label htmlFor="age">Age:</label>
            <input
            id="age"
            name="age"
            type="test"
            value={newFriend.age}
            onChange={handleChanges}
            />

            <label htmlFor="email">Email:</label>
            <input
            id="email"
            name="email"
            type="test"
            value={newFriend.email}
            onChange={handleChanges}
            />

            <button>Add Friend</button>

        </form>

    )
};

export default AddNewFriend;