const express = require('express');

const router = express.Router();

const postDb = require('./postDb.js');

router.get('/', (req, res) => {
    postDb.get().then( posts => {
        res.status(200).json(posts)
    }).catch(error => {
        res.status(500).json({ message: "Error trying to get posts from the database." })
    })
});

router.get('/:id', (req, res) => {
    const id = req.params.id;

    postDb.getById(id).then( post => {
        if(post){
            res.status(200).json(post)
        } else {
            res.status(404).json({ message: "Post doesn't exist." })
        }
    }).catch( error => {
        res.status(500).json({ message: "Error trying to retrieve the users posts from the database." })
    })
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;

    postDb.remove(id).then( deleted => {
        if(deleted){
            res.status(204).end(); 
        } else {
            res.status(404).json({ message: "Post doesn't exist." })
        }
    }).catch( error => {
        res.status(500).json({ error: "An error occured while deleting post from the database" })
    })
});

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const changes = req.body;
    const { text } = req.body;
    if(!text){
        res.status(400).json({ error: "You must provide text in the post field." })
    }
    postDb.update(id, changes).then( updatedPost => {
        res.status(200).json(updatedPost);
    } ).catch(error => {
        res.status(500).json({ error: "You've encountered an error trying to update the post in the database." })
    })
});

// custom middleware

function validatePostId(req, res, next) {
    const id = req.params.id;

    postDb.getById(id).then().catch(error => {
        res.status(500)
    })
};

module.exports = router;