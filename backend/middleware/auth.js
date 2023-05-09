const jwt = require("jsonwebtoken");
const User = require('../models/User');
const dotenv = require('dotenv');
dotenv.config();
 // import your User model here

const authMiddleware = async (req, res, next) => {
  // Get token from Authorization header
  const token = req.headers.authorization?.split(" ")[1];
  console.log(token)
  if (!token) {
    return res.status(401).json({ error: "Authorization header missing" });
  }

  try {
    // Verify token
    console.log(process.env.JWT_SECRET);
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded.id,"hello");

    // Find user in database
    const user = await User.findOne({where: {id : decoded.id}});
    console.log(user);
    if (!user) {
      return res.status(401).json({ error: "Invalid token" });
    }

    // Attach user object to request for later use
    req.user = user;

    // Call next middleware function
    next();
  } catch (err) {
    return res.status(401).json({ error: "Invalid token" });
  }
};

module.exports = authMiddleware;