import React from 'react';
import axios from 'axios';

import '../App.css';

class Posts extends React.Component{
    state = {
        posts: []
    }

    componentDidMount(){
        axios 
        .get(`https://turtles-app.herokuapp.com/api/posts/`)
        .then( res => {
            // console.log("response: ", res)
            this.setState({ 
                posts: res.data
            })
        })
        .catch(error => {
            console.log(error)
        })
    }


    render(){
        return(
            <div className="posts-container">
            <h1>Posts Component</h1>
            {this.state.posts.map( post => {
                return (
                    <p key={post.id}>{post.text}</p>
                )
            })}
            </div>
        )
    }
}

export default Posts;