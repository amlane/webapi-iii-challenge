import React from 'react';
import axios from 'axios';
import { readSync } from 'fs';

class PostByUser extends React.Component{
    state = {
        userPosts: [],
        user: this.props.match.params.id,
        username: this.props.match.params.name
    }

    componentDidMount(){
        axios 
        .get(`https://turtles-app.herokuapp.com/api/users/${this.state.user}/posts`)
        .then(res => {
            console.log(res)
            this.setState({
                userPosts: res.data
            })
        })
        .catch(error => {
            console.log(error)
        })
    }

    render(){
        return (
            <>
            <h1>Posts by {this.state.username}</h1>
            {this.state.userPosts.map( post => {
                return (
                    <>
                    <p key={post.id}>{post.text}</p>
                    </>
                )
            })}
            </>
        )
    }
}

export default PostByUser;