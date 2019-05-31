import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import User from './User';

import './Users.css';

class Users extends React.Component{
    constructor(props){
        super(props);
    }   

    deleteUser = (e, id) => {
        e.preventDefault();
        this.props.deleteUser(e, id);
        setTimeout(() => {
            this.props.history.push('/users')
            window.location.reload();
        }, 500)
    }

    render(){
        console.log('users', this.props.users)
        if(!this.props.users) return <h1>Loading data...</h1>;
        return (
            <>
            <h1>Users</h1>
            <Link to="/create-user">Add New User</Link>
            <div className="users">
                {this.props.users.map( user => {
                    return (
                    <User 
                    key={user.id} 
                    user={user} 
                    deleteUser={this.deleteUser} 
                    />
                )})}
            </div>
            </>
        )
    }
}

export default Users;