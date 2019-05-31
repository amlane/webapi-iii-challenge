import React from 'react';
import { Route, NavLink } from 'react-router-dom';

import Users from './components/Users';
import Posts from './components/Posts';
import PostByUser from './components/PostByUser';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Blog App</h1>
      <nav>
      <NavLink to="/">Home</NavLink>{' '}
      <NavLink to="/users">Users</NavLink>{' '}
      <NavLink to="/posts">Posts</NavLink>
      </nav>

      <Route path="/users" component={Users} />
      <Route path="/posts" component={Posts} />
    </div>
  );
}

export default App;
