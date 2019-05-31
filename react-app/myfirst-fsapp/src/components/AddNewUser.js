import React from 'react';


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
        if(!this.state.name) return;
        this.props.addNewUser(this.state)
        this.setState({ name: '' })
        setTimeout(() => {
          this.props.history.push('/users')
          window.location.reload();
        }, 500)
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
            <h2>Add New User</h2>
            <label>Name (required):</label>
            <input 
            name="name"
            value={this.state.name}
            onChange={this.handleInput}
            />
            <button className="submit-btn">Submit</button>
            </form>
        )
    }
}

export default AddNewUser;