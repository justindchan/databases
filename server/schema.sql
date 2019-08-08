CREATE DATABASE chat;

USE chat;

CREATE TABLE rooms (
  id int auto_increment,
  roomname CHAR (20),
  PRIMARY KEY (id)
);

CREATE TABLE messages (
  id int auto_increment,
  username CHAR (10),
  message CHAR (140),
  room int,
  PRIMARY KEY (id),
  FOREIGN KEY (room) references rooms(id)
);


/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

