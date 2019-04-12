const axios = require('axios');
const bcrypt = require('bcryptjs');

const { authenticate } = require('../auth/authenticate');

const Users = require('./models');

module.exports = server => {
  server.post('/api/register', register);
  server.post('/api/login', login);
  server.get('/api/jokes', authenticate, getJokes);
};

async function register(req, res) {
  // implement user registration
  let user = req.body; 
  const hash = bcrypt.hashSync(user.password, 10); // 2 ^ n
  user.password = hash;

  try {
    const saved = await Users.add(user);
    res.status(201).json(saved);
  } catch (error) {
    console.log(error);
    res.staus(500).json(error);
  }
}



function login(req, res) {
  // implement user login
}

function getJokes(req, res) {
  const requestOptions = {
    headers: { accept: 'application/json' },
  };

  axios
    .get('https://icanhazdadjoke.com/search', requestOptions)
    .then(response => {
      res.status(200).json(response.data.results);
    })
    .catch(err => {
      res.status(500).json({ message: 'Error Fetching Jokes', error: err });
    });
}
