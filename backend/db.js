// backend/db.js
const mysql = require('mysql2');

const connection = mysql.createConnection({
  //host: 'localhost',
  host: '127.0.0.1',
  user: 'root',
  password: '#Mysql@0803', // Replace with your MySQL root password
  database: 'EMS',
  port: 3307,
  socketPath: '/var/run/mysqld/mysqld.sock',
});

connection.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

module.exports = connection;
