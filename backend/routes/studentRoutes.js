const express = require("express");
const router = express.Router();
const Student = require("../models/Student");
const authMiddleware = require("../middleware/auth");

// Create a new student
router.post("/create-profile", authMiddleware, async (req, res) => {
  try {
    // Create student object from request body
    const student = req.body;

    // Attach user ID to student object
    student.userId = req.user.id;

    // Create new student in database
    const newStudent = await Student.create(student);

    // Send new student object as response
    res.json(newStudent);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// Get all students belonging to the authenticated user
router.get("/profile", authMiddleware, async (req, res) => {
  try {
    // Find all students belonging to user
    const students = await Student.findAll({
      where: { userId: req.user.id },
    });

    // Send array of student objects as response
    res.json(students);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;