const jwt = require('jsonwebtoken');

const JWT_SECRET = 'ORH/KWxut9o01U4Nx8Mf4537IvZ+jrkwNqwIJ1kxjsZvLTYbk3PEmwItkRsUwLQsAcMz2SOCie8n7FuzMJPClw==';

const verifyToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Invalid token' });
  }
};

module.exports = { verifyToken };
