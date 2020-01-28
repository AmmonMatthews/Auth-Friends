import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {



    return(
        <div>
            <div>
                <Link to="/login">Login</Link>
            </div>    
            <div>
                <Link to="/friends">Friends List</Link>
            </div>
        </div>

    )
}

export default Header;