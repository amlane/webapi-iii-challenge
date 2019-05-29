const express = require('express');

const router = express.Router();

const userDb = require('./userDb.js');
const postDb = require('../posts/postDb.js');

router.post('/', (req, res) => {
    const user = req.body;

    userDb.insert(user).then( newUser => {
        res.status(201).json(newUser)
    }).catch( error => {
        res.status(500).json({ error: "Unable to add user to database." })
    })
});

router.post('/:id/posts', (req, res) => {
    let post = req.body;
    const id = req.params.id;
    post.user_id = id;

    if(!post.text){
        res.status(400).json({ message: "Posts cannot be blank." })
    }

    postDb.insert(post).then( post => {
        res.status(201).json(post)
    } ).catch( error => {
        res.status(500).json({ message: "Unable to add post to the database." })
    })
});

router.get('/', (req, res) => {
    userDb.get().then( users => {
        res.status(200).json(users)
    }).catch( error => {
        res.status(500).json({ error: "Unable to find users." })
    })
});

router.get('/:id', (req, res) => {
    const id = req.params.id;

    userDb.getById(id).then( user => {
        if(user){
            res.status(200).json(user)
        } else {
            res.status(404).json({ message: "No user by that ID." })
        }
    }).catch( error => {
        res.status(500).json({ error: 'Unable to find users by that ID.' })
    })
});

router.get('/:id/posts', (req, res) => {
    const id = req.params.id;

    userDb.getUserPosts(id).then( userPosts => {
        if(userPosts && userPosts.length){
            res.status(200).json(userPosts)
        } else {
            res.status(404).json({ message: 'User ID not valid.' })
        }
    }).catch(error => {
        res.status(500).json({ error: "An error occurred trying to retrieve users posts from the database." })
    })
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;

    userDb.remove(id).then( deleted => {
        if(!deleted){
            res.status(404).json({ message: "Cannot delete a user that doesn't exist." })
        } else {
            res.status(204).end();
        }
    }).catch( error => {
        res.status(500).json({ error: "An error occured while trying to delete user from the database." })
    })
});

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const changes = req.body;
    const { name } = req.body;
    if(!name){
        res.status(400).json({ message: "Name cannot be blank." })
    }

    userDb.update(id, changes).then( updatedUser => {
        res.status(200).json(updatedUser);
    } ).catch(error => {
        res.status(500).json({ error: "An error occured while trying to update user in the database." })
    })

});

//custom middleware

function validateUserId(req, res, next) {
    if(req.body && req.body.id){
        next();
    } else {
        res.status(404).json({ message: "Information not found." })
    }
};

function validateUser(req, res, next) {

};

function validatePost(req, res, next) {

};

module.exports = router;
