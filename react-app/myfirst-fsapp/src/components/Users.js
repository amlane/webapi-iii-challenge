import React from 'react';
import axios from 'axios';

import '../App.css';

class Users extends React.Component{
    state = {
        users: []
    }

    componentDidMount(){
        axios
        .get('https://turtles-app.herokuapp.com/api/users')
        .then( res => {
            console.log(res)
            this.setState({ users: res.data })
        })
        .catch( err => {
            console.log("error: ", err)
        })
    }

    render(){
        return (
            <>
            <div className="users">
                <h1>Users</h1>
                {this.state.users.map( user => {
                    return (
                        <p>{user.name}</p>
                    )
                })}
            </div>
            </>
        )
    }
}

export default Users;