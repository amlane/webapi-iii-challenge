import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import User from './User';

import './Users.css';

class Users extends React.Component{
    constructor(props){
        super(props);
    }   

    componentDidMount(){
        this.props.getUsers();
    }

    render(){
        console.log('users', this.props.users)
        if(!this.props.users || this.props.users.length === 1) return <h1>Loading data...</h1>;
        return (
            <>
            <h1>Users</h1>
            <Link to="/create-user">Add New User</Link>
            <div className="users">
                {this.props.users.map( user => {
                    return <User user={user} deleteUser={this.props.deleteUser} />
                })}
            </div>
            </>
        )
    }
}

export default Users;