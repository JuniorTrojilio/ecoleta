import path from 'path';
import './src/utils/config';

module.exports = {
    client: 'pg',
    connection: process.env.DATAURL,
    migrations : {
        directory: path.resolve(__dirname,'src', 'database', 'migrations')
    },
    seeds : {
        directory: path.resolve(__dirname,'src', 'database', 'seeds')
    },
  };
