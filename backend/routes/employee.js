// backend/routes/employees.js
const express = require('express');
const router = express.Router();
const db = require('../db');
const passport = require('passport');

// Example route to get all employees
router.get('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  db.query('SELECT * FROM employees', (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(results);
    }
  });
});

// Add more routes for CRUD operations

module.exports = router;
