import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import axios from 'axios';

import Users from './components/Users';
import Posts from './components/Posts';
import PostByUser from './components/PostByUser';
import AddNewUser from './components/AddNewUser';


import './App.css';

class App extends React.Component{
  state = {
    users: []
  }

      getUsers = () => {
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

  render(){
    return (
      <div className="App">
        <h1>Blog App</h1>
        <nav>
        <NavLink to="/">Home</NavLink>{' '}
        <NavLink to="/users">Users</NavLink>{' '}
        <NavLink to="/posts">Posts</NavLink>
        </nav>

        <Route 
        exact 
        path="/users" 
        render={ props => 
          <Users
          {...props}
          users={this.state.users}
          getUsers={this.getUsers}
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
