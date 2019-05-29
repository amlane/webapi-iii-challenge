const express = require('express');

const router = express.Router();

const userDb = require('./userDb.js');

router.post('/', (req, res) => {
    const user = req.body;

    userDb.insert(user).then( newUser => {
        res.status(201).json(newUser)
    }).catch( error => {
        res.status(500).json({ error: "Unable to add user to database." })
    })
});

router.post('/:id/posts', (req, res) => {
    
});

router.get('/', (req, res) => {
    userDb.get().then( users => {
        res.status(200).json(users)
    }).catch( error => {
        res.status(500).json({ error: "Unable to find users." })
    })
});

router.get('/:id', (req, res) => {

});

router.get('/:id/posts', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

router.put('/:id', (req, res) => {

});

//custom middleware

function validateUserId(req, res, next) {
    if(req.body && req.body.id){
        next();
    } else {
        res.status(404).json({ message: "User ID not found." })
        next();
    }
};

function validateUser(req, res, next) {

};

function validatePost(req, res, next) {

};

module.exports = router;
