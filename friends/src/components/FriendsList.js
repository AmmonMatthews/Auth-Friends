import React, { useState, useEffect } from 'react';
import Friends from './Friends';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import AddNewFriend from './AddNewFriend';
import { Link } from 'react-router-dom';


const FriendsList = () => {
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


    return(
       

        <div>
           <Link to="/addfriend">Add Friend</Link>
            
            {friends.map(friend => {
               return <Friends key={friend.id} friend={friend} />
            })}
                
        </div>
    )
}

export default FriendsList;