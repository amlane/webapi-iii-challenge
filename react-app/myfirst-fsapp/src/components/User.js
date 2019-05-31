import React from 'react';
import { Link } from 'react-router-dom';

function User(props){

    return (
        <div className="user">
        <Link className="username" to={`/users/${props.user.id}/posts/${props.user.name}`}>
            <p key={props.user.id}>{props.user.name}</p>
        </Link>
         <button>edit</button>
         <button onClick={e => props.deleteUser(e, props.user.id)}>x</button>
        </div>
    )
}

export default User;
