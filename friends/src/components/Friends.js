import React from 'react';



const Friends = ({friend}) => {


    return(
        <div>
            <h2>{friend.name}</h2>
            <p>{friend.age}</p>
            <p>{friend.email}</p>

        </div>
    )
}

export default Friends;