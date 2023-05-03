const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/user');
const { jwtSecret } = require('../config/database');

// Register User
router.post('/register', (req, res) => {
  const { email, password, role } = req.body;
  // Check if user already exists
  User.findOne({ where: { email: email } })
    .then(user => {
      if (user) {
        return res.status(400).json({ error: 'Email already exists' });
      } else {
        // Create new user
        const newUser = new User({
          email,
          password,
          role,
        });
        // Hash password and save user
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save()
              .then(user => {
                res.json(user);
              })
              .catch(err => console.log(err));
          });
        });
      }
    })
    .catch(err => console.log(err));
});

// Login User
router.post('/login', (req, res) => {
    const { email, password } = req.body;
    // Find user by email
    User.findOne({ where: { email: email } })
      .then(user => {
        if (!user) {
          return res.status(404).json({ error: 'Email not found' });
        }
        // Check password
        bcrypt.compare(password, user.password)
          .then(isMatch => {
            if (isMatch) {
              // Create JWT Payload
              const payload = {
                id: user.id,
                email: user.email,
                role: user.role,
              };
              console.log(jwtSecret);
              // Sign token
              jwt.sign(payload, jwtSecret, { expiresIn: Number.MAX_SAFE_INTEGER }, (err, token) => {
                res.json({
                  success: true,
                  token: 'Bearer ' + token,
                  payload: payload,
                });
              });
            } else {
              return res.status(400).json({ error: 'Password incorrect' });
            }
          });
      })
      .catch(err => console.log(err));
  });  

module.exports = router;
