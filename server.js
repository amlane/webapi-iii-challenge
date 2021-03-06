const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const userRouter = require('./users/userRouter.js');
const postRouter = require('./posts/postRouter.js');

const server = express();

server.use(express.json());
server.use(helmet());
server.use(logger);
server.use(cors({ origin: '*' }))


server.use('/api/users', userRouter)
server.use('/api/posts', postRouter)


server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`)
});

//custom middleware

function logger(req, res, next) {
  const time = new Date().toISOString();
  console.log(`a request was made from ${req.method} request to ${req.url} at ${time}`);
  next();
};

module.exports = server;
