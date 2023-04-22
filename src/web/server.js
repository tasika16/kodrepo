const { promisify } = require('util');
const http = require("http");

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./router');
const { port } = require('../config');

const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url} at ${new Date()}`);
  next();
});

app.use(router);

app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }

  res.status(500);
  return res.send({
    message: 'Something went wrong'
  });
});

const listenPromise = promisify(server.listen.bind(server, port));

module.exports = {
  init: listenPromise
}