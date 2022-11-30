const { validateToken } = require('../utils/JWT');

module.exports = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Token was not found' });
  }

  try {
    const { id, role } = validateToken(token);
    req.userId = id;
    req.userRole = role;
    next();
  } catch (e) {
    res.status(401).json({ message: 'Token must be a valid one' });
  }
};