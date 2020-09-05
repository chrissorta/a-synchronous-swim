const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');
const messagesQueue = require('./messageQueue.js')

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////

let messageQueue = null;
module.exports.initialize = (queue) => {
  messageQueue = queue;
};

let randomDirection = function () {
  let direction = ['left', 'right', 'down', 'up'];
  let min = 0;
  let max = 3;
  let random = Math.floor(Math.random() * (max - min + 1)) + min;

  return direction[random];
}

module.exports.router = (req, res, next = () => { }) => {
  console.log('Serving request type ' + req.method + ' for url ' + req.url);

  if (req.method === 'OPTIONS') {
    res.writeHead(200, headers);
    res.end();
  }

  if (req.method === 'GET') {
    res.writeHead(200, headers);
    messagesQueue.display()
    if (messagesQueue.length() > 0) {
      let direction = messagesQueue.dequeue()
      res.write(direction);
    }
    res.end();

  }

  //next(); // invoke next() at the end of a request to help with testing!
};
