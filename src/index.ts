import express from 'express'
import api from './routes';
import { connect } from './config/mongoose';
import { env } from './config/environment'
import { configCors } from './config/cors';

connect()
  .then((res) => {
    console.log('Connect successfully to database server');
    bootServer()
  })
  .catch((error) => {
    console.log(error);
    process.exit(1)
  })

const bootServer = () => {
  const app = express()

  configCors(app)

  app.use(express.urlencoded({
    extended: true,
  }))
  app.use(express.json())

  app.use('/api', api)

  app.listen(Number(env.PORT), env.HOST, () => {
    console.log(`http://${env.HOST}:${env.PORT}`);
  })

}