const companyMiddleware = (req, res, next) => {
    if (req.user.role !== 'company') {
      return res.status(401).json({ message: 'Unauthorized access' });
    }
    next();
  };
  
module.exports = companyMiddleware;
  