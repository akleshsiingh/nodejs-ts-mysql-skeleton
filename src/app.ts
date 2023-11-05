import express from 'express';
var cors = require('cors');
import { AuthRoute } from './route/auth.route';
import { JobRoutes } from './route/jobs.route';

const app = express();
import dotenv from 'dotenv';
import Connection from './db/connection.db';
dotenv.config();



async function main() {
  try {
    const port = process.env.PORT || 3000;

    app.use(cors());
    app.use(express.json());

    const conn =  Connection.getInstance();
    await conn.createConnection();

    // define routes
    console.log('init routes');
    app.use('/', (new AuthRoute()).router)
    app.use('/job', (new JobRoutes()).router);


    app.listen(port, () => {
      return console.log(`server started on http://localhost:${port}`);
    });

  } catch (error) {
    console.error('An error occurred:', error);
  }
}

main();