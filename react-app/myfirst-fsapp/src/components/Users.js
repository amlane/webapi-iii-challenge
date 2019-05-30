import React from 'react';
import axios from 'axios';

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
            <div>Yo dawg I'm the Users Component</div>
            {this.state.users.map( user => {
                return (
                    <p>{user.name}</p>
                )
            })}
            </>
        )
    }
}

export default Users;