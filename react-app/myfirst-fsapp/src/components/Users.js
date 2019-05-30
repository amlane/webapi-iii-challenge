import React from 'react';
import axios from 'axios';

class Users extends React.Component{
    state = {
        users: []
    }

    componentDidMount(){
        axios
        .get('http://localhost:5000/api/users')
        .then( res => {
            console.log(res)
        })
        .catch( err => {
            console.log("error: ", err)
        })
    }

    render(){
        return (
            <div>Yo dawg I'm the Users Component</div>
        )
    }
}

export default Users;