import path from 'path';

module.exports = {
    client: 'pg',
    connection: {
        host : process.env.HOST,
        user : process.env.USER,
        password : process.env.PASSWORD,
        database : process.env.DATABASENAME
    },
    migrations : {
        directory: path.resolve(__dirname, 'database', 'migrations')
    },
    searchPath: ['knex', 'public'],
  };
