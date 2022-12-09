//Request response Handler File --> Express Application
const express = require('express')
const app= express()

const bodyParser = require('body-parser') 
const morgan = require('morgan')
//MIDDLEWARE - This gets executed after server starts running but before you manage your route
//1.nodemon -> Dev middleware-> is going to start server and will detect changes on the code and restart the server

//2.body-parser --> you want a direct access to req.body object
// extended: false --> req.body will only contain data in the form of string or array
// extended: true --> req.body will contain data in any format
app.use( bodyParser.urlencoded( {extended: true} ) )
app.use( bodyParser.json() )

// 3. morgan -> Dev Middleware -> Logger Middleware -> For all requests it will create a log in the terminal
app.use(morgan('dev'))

const loginHandler = require('./api/routes/login')
const singupHandler = require('./api/routes/signup')

//Manage my routes --> localhost:5001
// app.use('/users',(req,res)=>{
//     res.status(200).json({msg:"success"})
// })
app.use('/users/login',loginHandler) 
app.use('/users/signup',singupHandler)

//Handling req and responses from the express app
app.use((request, response) => { 
    // use function helps in handling request responses.

    //response.status().json(object) - this is how we set response 
    response.status(404).json({msg: "Resource not found!"})
})

module.exports = app;

