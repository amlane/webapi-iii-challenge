import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import '../App.css';

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
            <div className="users">
                <h1>Users</h1>
                <Link to="/create-user">Add New User</Link>{' '}
                {this.props.users.map( user => {
                    return (
                        <Link to={`/users/${user.id}/posts/${user.name}`}>
                            <p key={user.id}>{user.name}</p>
                        </Link>
                    )
                })}
            </div>
            </>
        )
    }
}

export default Users;