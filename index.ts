import express from 'express'
import { connectDB } from './config/mongodb'
import { env } from './config/environment'

const app = express()

connectDB().catch(console.log)

app.get('/', (req, res) => {
  res.send('hello world')
})

app.listen(Number(env.PORT), env.HOST, () => {
  console.log(`http://${env.HOST}:${env.PORT}`);
})
