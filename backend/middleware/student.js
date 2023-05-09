const studentMiddleware = (req, res, next) => {
  if (req.user && req.user.role === "student") {
    return next();
  }
  return res
    .status(403)
    .json({ error: "Forbidden: You must be a student to perform this action" });
};

module.exports = studentMiddleware;
