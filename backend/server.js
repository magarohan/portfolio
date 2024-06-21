const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const messageRoute = require('./routes/messageRoute')
require('dotenv').config()

const app = express()

// Middleware to parse JSON
app.use(express.json())

// Custom middleware to log requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`)
  next()
})

//mideleware for cors
app.use(cors())

// Routes
app.use('/api/message', messageRoute)

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB")
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB", error)
  })

app.listen(process.env.PORT, (error) => {
  if (!error) {
    console.log(`Connected to port ${process.env.PORT}`)
  } else {
    console.log('Error occurred!!')
  }
})
