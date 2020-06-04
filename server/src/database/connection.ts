import knex from 'knex';
import '../utils/config';

const connection = knex({
    client: 'pg',
    connection: process.env.HOST,
  });

  export default connection;