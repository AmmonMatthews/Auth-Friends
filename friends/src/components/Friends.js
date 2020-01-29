import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth'


const Friends = (props) => {
    console.log(props)
    const[friends, setFriends] = useState([]);

    useEffect(() =>{
      getData();
    }, [])
  
  
  
    const getData = () => {
        axiosWithAuth()
          .get(`/api/friends/${props.friend.id}`)
          .then(res => {
              setFriends(res.data)
          })
          .catch(err => console.log(err));
    }

    const handleDelete = () => {
        axiosWithAuth()
            .delete(`/api/friends/${props.friend.id}`)
            .then(res => {
                console.log(res)
                setFriends(res.data)
    
            })
            props.history.push("/friends")
        }

    return(
        <div>
            <h2>{friends.name}</h2>
            <p>{friends.age}</p>
            <p>{friends.email}</p>

            <button onClick={handleDelete} >Delete</button>

        </div>
    )
}

export default Friends;