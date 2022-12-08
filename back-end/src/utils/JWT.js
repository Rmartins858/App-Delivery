const { verify, sign } = require('jsonwebtoken');
const fs = require('fs');

const SECRET = fs.readFileSync('jwt.evaluation.key', { encoding: 'utf-8' })

const createToken = (payload) => {
  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  const token = sign(payload, SECRET, jwtConfig);
  return token;
};

const validateToken = (token) => verify(token, SECRET);

module.exports = {
  createToken,
  validateToken,
};