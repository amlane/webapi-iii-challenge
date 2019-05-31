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

      <Route exact path="/users" component={Users} />
      <Route exact path="/posts" component={Posts} />
      <Route path="/users/:id/posts/:name" component={PostByUser} />
    </div>
  );
}

export default App;
