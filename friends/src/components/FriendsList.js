import React, { useState, useEffect } from 'react';
import Friends from './Friends';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { Link } from 'react-router-dom';


const FriendsList = props => {
    const[friends, setFriends] = useState([]);

  useEffect(() =>{
    getData();
  }, [])



  const getData = () => {
      axiosWithAuth()
        .get('/api/friends')
        .then(res => {
            setFriends(res.data)
        })
        .catch(err => console.log(err));
  }

  

    console.log(friends)

    return(
       

        <div>
           <Link to="/addfriend">Add Friend</Link>
            
            {friends.map(friend => {
               return <div key={friend.id}>
                        <Friends  friend={friend} history={props.history}  />
                        {/* <button onClick={handleDelete}>Delete</button> */}
                    </div>
            })}
                
        </div>
    )
}

export default FriendsList;