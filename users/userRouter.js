const express = require('express');

const router = express.Router();

const userDb = ('./userDb.js');

router.post('/', (req, res) => {

});

router.post('/:id/posts', validateUserId, (req, res) => {

});

router.get('/', (req, res) => {

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

validateUserId();

function validateUser(req, res, next) {

};

function validatePost(req, res, next) {

};

module.exports = router;
