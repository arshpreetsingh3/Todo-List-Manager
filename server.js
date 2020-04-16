const express = require('express')

const { db } = require('./db')
const todoRoute = require('./routes/todos')

// const SERVER_PORT = process.env.PORT || 1111

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', express.static(__dirname + '/public'))

app.use('/todos', todoRoute)

db.sync()
  .then(() => {
    app.listen(2222)
  })
  .catch((err) => {
    console.error(err)
  })