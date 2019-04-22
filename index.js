require('dotenv').config(); 

const server = require('./api/server.js');

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`\n *** Server listening on port ${port} ***\n`);
});

server.get('/', (req, res) => {
  res.send(`
  <h1>Api Portal</h1>
  <h3>Endpoint:</h3>
  <p></p>
  <p>~/api/login</p>
  <p>~/api/register</p>
  <p></p>
  <h3>Methods </h3>
  <p>POST {username: '', password ''} to '/api/register'</p>
  <p>POST {username: '', password: '' } to '/api/login' </p>
  `)
})