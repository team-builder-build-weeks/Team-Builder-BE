// const axios = require('axios');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// const { authenticate } = require('../auth/authenticate');
const secret = require('./secret')

const Users = require('./user-models');

// module.exports = server => {
//   server.post('/api/register', register);
//   server.post('/api/login', login);
// };

module.exports = {
  register, 
  login
}

async function register(req, res) {
  let user = req.body; 
  const hash = bcrypt.hashSync(user.password, 10); // 2 ^ n
  user.password = hash;

  try {
    const saved = await Users.add(user);
    res.status(201).json(saved);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}



async function login(req, res) {
  let {username, password} = req.body;
    const user = await Users.findBy({username});
    
    try {
        if (user && bcrypt.compareSync(password, user.password)) {
            const token = generateToken(user);
            res.status(200).json({
                message: `Welcome ${user.username}?!`,
                token
            });
        } else {
            res.status(401).json({ message: 'Invalid Credentials' });
        }
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}

function generateToken(user) {
  const payload = {
      subject: user.id, // subject in payload is what the token is about
      username: user.username,
      // ...otherData
  };

  const options = {
      expiresIn: '1d'
  };
  return jwt.sign(payload, secret.jwtSecret, options)
}
