import knex from 'knex';
import './src/utils/config';

const connection = knex({
    client: 'pg',
    connection: process.env.HOST,
  });

  export default connection;