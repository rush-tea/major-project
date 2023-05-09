const express = require("express");
const router = express.Router();
const { Op } = require("sequelize");
const Job = require("../models/Job");
const User = require("../models/User");
const Application = require("../models/Application");
const authMiddleware = require("../middleware/auth");
const studentMiddleware = require("../middleware/student");
const companyMiddleware = require("../middleware/company");
const Student = require("../models/Student");
const Eligibility = require("../models/Eligibility");

// POST /apply/:jobId
router.post(
  "/apply/:jobId",
  authMiddleware,
  studentMiddleware,
  async (req, res) => {
    try {
      const jobId = req.params.jobId;

      // Find student by user ID
      const student = await Student.findOne({ where: { userId: req.user.id } });

      // Check if job exists and include associated company and eligibility models
      const job = await Job.findByPk(jobId);

      if (!job) {
        return res.status(404).json({ error: "Job not found" });
      }

      const eligibility = await Eligibility.findOne({where : {jobId: jobId}});

      if (!eligibility) {
        return res.status(404).json({ error: "Job eligibility not found" });
      }

      if (!student) {
        return res.status(404).json({ error: "Student not found" });
      }

      const cgpa = student.cgpa;
      const pwd = student.pwd;
      const allowedBranches = eligibility.branchedAllowed;
      // if (!allowedBranches.includes(student.branch)) {
      //   return res
      //     .status(400)
      //     .json({ error: "Your branch is not eligible for this job" });
      // }
      // if ((eligibility.pwdAllowed && pwd) || (!eligibility.pwdAllowed )) {
      //   return res
      //     .status(400)
      //     .json({ error: "This job is only for PwD candidates" });
      // }
      if (cgpa < eligibility.minCgpa) {
        return res
          .status(400)
          .json({
            error: "Your CGPA is below the required minimum CGPA for this job",
          });
      }

      // Check if student has already applied for the job
      const applicationExists = await Application.findOne({
        where: {
          [Op.and]: [{ jobId }, { studentId: student.id }],
        },
      });
      if (applicationExists) {
        return res
          .status(400)
          .json({ error: "You have already applied for this job" });
      }

      // Create new application
      const newApplication = await Application.create({
        JobId : jobId,
        StudentId: student.id,
      });

      res
        .status(201)
        .json({
          message: "Application submitted successfully",
          application: newApplication,
        });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Server error" });
    }
  }
);

router.get("/applications/:jobId", authMiddleware, companyMiddleware, async (req, res) => {
  try {
    const jobId = req.params.jobId;

    // check if job exists and belongs to the current company
    const job = await Job.findOne({
      where: { id: jobId },
    });
    if (!job) {
      return res.status(404).json({ error: "Job not found" });
    }

    // get all applications received for the job
    const applications = await Application.findAll({
      where: { jobId },
      include: [{ model: Student, as: "Student" }],
    });

    res.status(200).json({ applications });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});



module.exports = router;
