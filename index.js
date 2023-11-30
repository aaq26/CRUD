const express = require('express')
const dotenv = require('dotenv').config()
const connectDB = require('./db')

connectDB()

const app = express()

const port = process.env.PORT

app.use(express.json())

app.listen(port, () => console.log(`app running on port ${port}`))

app.use('/tasks', require('./taskRoutes'))