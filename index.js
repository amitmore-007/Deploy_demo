require('dotenv').config()

const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/instagram', (req, res) => {
    res.send('amitmore_007')
})

app.get('/login', (req, res) => {
    res.send('<h1>Login successfully</h1>')
})

app.get('/youtube', (req, res) => {
    res.send('<p>Create your channel and have fun</p>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})