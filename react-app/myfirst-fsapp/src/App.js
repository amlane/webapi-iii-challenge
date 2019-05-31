import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import axios from 'axios';

import Users from './components/Users';
import Posts from './components/Posts';
import PostByUser from './components/PostByUser';
import AddNewUser from './components/AddNewUser';


import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      users: [],
      user: {}
    }
  }

      componentDidMount(){
        console.log("CDM")
        axios
            .get('https://turtles-app.herokuapp.com/api/users')
            .then( res => {
                this.setState({ users: res.data })
            })
            .catch( err => {
                console.log("error: ", err)
            })
      }

      addNewUser = newUser => {
        console.log("add new user")
        axios 
        .post(`https://turtles-app.herokuapp.com/api/users/`, newUser)
        .then(res => {
            console.log(res)
            this.setState({
                user: res.data
            })
        })
        .catch(error => {
            console.log(error)
        })    
    }

      deleteUser = (e, id) => {
        axios
        .delete(`https://turtles-app.herokuapp.com/api/users/${id}`)
        .then(res => {
            this.setState({ user: res.data })
        })
        .catch(error => {
          console.log(error)
        })
      }

  render(){
    console.log("users", this.state.users)
    console.log('user', this.state.user)
    return (
      <div className="App">
        <h1>My Super Neato Blog App</h1>
        <nav>
        <NavLink to="/">Home</NavLink>{' '}
        <NavLink to="/users">Authors</NavLink>{' '}
        <NavLink to="/posts">Posts</NavLink>
        </nav>

        <Route 
        exact 
        path="/users" 
        render={ props => 
          <Users
          {...props}
          users={this.state.users}
       
          deleteUser={this.deleteUser}
          />}
          />
        <Route exact path="/posts" component={Posts} />
        <Route path="/users/:id/posts/:name" component={PostByUser} />
        <Route 
        path="/create-user" 
        render={ props => 
          <AddNewUser
          {...props}
          addNewUser={this.addNewUser}
          />} 
        />
      </div>
    );
  }
}

export default App;
