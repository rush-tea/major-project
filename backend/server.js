const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const studentRoutes = require('./routes/studentRoutes');
const { sequelize, jwtSecret } = require('./config/database');

const app = express();

// Set up body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Set up database connection
sequelize.authenticate()
  .then(() => {
    console.log('Connected to database');
    //sequelize.sync({ force: true });
  })
  .catch(err => console.error('Database connection error:', err));

// Set up Passport middleware
app.use(passport.initialize());
require('./config/passport')(passport);

// Set up authentication routes
app.use('/auth', authRoutes);
app.use('/student',studentRoutes);

// Set up error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Server error.');
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));