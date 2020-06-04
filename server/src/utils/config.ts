import * as dotenv from "dotenv";
import path from 'path';

module.exports = dotenv.config({
    path: path.resolve(__dirname, '..', '..', '.env')
});




