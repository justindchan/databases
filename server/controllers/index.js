var models = require('../models');
// var express = require('express');
// var app = express();

module.exports = {
  messages: {
    get: function (req, res) {
    }, // a function which handles a get request for all messages
    post: function (req, res) {
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {
      var data = req.body;
      models.users.post(data, (err,task) => {
        if (err) {
          res.send(err);
        } else {
          res.send(task);
        }
      })
    }
  }
};

