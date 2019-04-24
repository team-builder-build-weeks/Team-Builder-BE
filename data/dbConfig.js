const knex = require('knex');
require('dotenv').config();

const dbEngine = process.env.DB || 'development';
const config = require('../knexfile')

module.exports = knex(config[dbEngine]);
