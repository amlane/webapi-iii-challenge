import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './Users.css';

class Users extends React.Component{
    constructor(props){
        super(props);
    }   

    componentDidMount(){
        this.props.getUsers();
    }

    render(){
        return (
            <>
            <h1>Users</h1>
            <Link to="/create-user">Add New User</Link>{' '}
            <div className="users">
                {this.props.users.map( user => {
                    return (
                        <Link className="user" to={`/users/${user.id}/posts/${user.name}`}>
                            <p key={user.id}>{user.name}</p>
                            <button>edit</button>
                            <button>x</button>
                        </Link>
                    )
                })}
            </div>
            </>
        )
    }
}

export default Users;