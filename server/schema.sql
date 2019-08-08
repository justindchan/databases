CREATE DATABASE chat;

USE chat;

-- CREATE TABLE rooms (
--   id int auto_increment,
--   room CHAR (100),
--   PRIMARY KEY (id)
-- );

CREATE TABLE users (
  id int auto_increment,
  username char (20),
  PRIMARY KEY (id)
);

CREATE TABLE messages (
  id int auto_increment,
  username CHAR (20),
  message CHAR (140),
  roomname CHAR (20),
  PRIMARY KEY (id)
  -- FOREIGN KEY (roomname) references rooms(id)
);



/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

