if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}
const express = require("express");
const mongoose = require('mongoose');

const authRoute = require('./routes/auth')
const notesRoute = require('./routes/notes')

// express init
const app = express()

// mongoose init
const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/inotebook'
async function main() {
  await mongoose.connect(dbUrl);
  console.log("Database connected");
}
main().catch(err => console.log(err));

// middleware
app.use(express.json())

// Routes
app.get('/', (req, res) => {
    res.send("Hello wprld")
})

app.use('/api/auth', authRoute)
app.use('/api/notes', notesRoute)


// error handling middleware
app.use((err, req, res, next) => {
    const {statusCode = 500, message} = err
    if (!err.message) {
        err.message = 'Something went wrong'
    }
    res.status(statusCode).json({err, message})
})

const port = process.env.PORT || 8080
app.listen(port, (req, res) => {
    console.log('Listening to the port 8080');
})
