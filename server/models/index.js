var db = require('../db');

module.exports = {
  messages: {
    get: function (data, callback) {
      db.query(`SELECT * from messages`, (err, res) => {
        if (err) {
          console.log('error: ', err);
        } else {
          callback(null, res);
        }
      })


    }, // a function which produces all the messages
    post: function (data, callback) {
      console.log(data);
      db.query(`INSERT INTO messages SET ?`, {username: data.username, message: data.message, roomname: data.roomname}, (err, res) => {
        if (err) {
          console.log('error: ', err);
        } else {
          callback(null, res);
        }
      })
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {




    },
    post: function (data, callback) {
      db.query(`INSERT INTO users SET ?`, {username: data.username}, (err,res) => {
        if (err) {
          console.log('error: ', err);
        } else {
          callback(null, res);
        }
      })
    }
  }
};

