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

});

router.put('/:id', (req, res) => {

});

// custom middleware

function validatePostId(req, res, next) {

};

module.exports = router;