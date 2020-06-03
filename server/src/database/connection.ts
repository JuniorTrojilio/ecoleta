import knex from 'knex';

const connection = knex({
    client: 'pg',
    connection: {
        host : process.env.HOST,
        user : process.env.USER,
        password : process.env.PASSWORD,
        database : process.env.DATABASENAME
    },
    searchPath: ['knex', 'public'],
  });

  export default connection;