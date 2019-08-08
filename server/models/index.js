var db = require('../db');

module.exports = {
  messages: {
    get: function (req, res) {

    }, // a function which produces all the messages
    post: function () {} // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (data, callback) {
      db.query(`INSERT INTO messages SET ?`, {username: data.username, message: data.message, room: data.roomname}, (err,res) => {
        if (err) {
          console.log('error: ', err);
        } else {
          callback(null, res);
        }
      })
    }
  }
};

