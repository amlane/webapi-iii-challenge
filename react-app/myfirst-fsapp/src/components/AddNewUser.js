import React from 'react';
import axios from 'axios';

class AddNewUser extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: ""
        }
    }


    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log('clicked')
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
            <div>Add New User</div>
            <label>Name (required):</label>
            <input 
            name="name"
            value={this.state.name}
            onChange={this.handleInput}
            />
            <button>Submit</button>
            </form>
        )
    }
}

export default AddNewUser;