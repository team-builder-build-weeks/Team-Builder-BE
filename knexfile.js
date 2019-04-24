require('dotenv').config()

module.exports = {
  development: {
    client: 'sqlite3',
    connection: { filename: './data/Projects.db3' }, // change this if you want a different name for the data
    useNullAsDefault: true, // used to avoid warning on console
    migrations: {
      directory: './data/migrations',
      tableName: 'dbmigrations',
    },
    seeds: { directory: './data/seeds' },
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done)
      }
    }
  },

  production : {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './data/migrations',
    },
    
    seeds: {
      directory: './data/seeds',
    },
  },
};
