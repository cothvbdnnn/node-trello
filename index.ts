import express from 'express'

const app = express()

const hostName = 'localhost'

const port = 5000

app.get('/', (req, res) => {
  res.send('hello world')
})

app.listen(port, hostName, () => {
  console.log(`http://${hostName}:${port}`);
})
