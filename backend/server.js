// backend/server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const db = require('./db');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Initialize Passport
app.use(passport.initialize());
require('./middleware/passport')(passport);

// Import routes
const employeeRoutes = require('./routes/employees');
app.use('/api/employees', employeeRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
