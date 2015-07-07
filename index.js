'use strict'

//Dependencies
import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import morgan from 'morgan'

//App modules
import Categories from './lib/categories'
import Posts from './lib/posts'

//Mongoose config
const database = process.env.MONGO_URL || 'mongodb://localhost:27017/bloggy'

mongoose.connect(database, function(err) {
  if (err) {
    console.log(`ERROR: on connecting to database, ${err}`);
  }
})

//Create our express app and set the port
const app = express()
const port = process.env.PORT || 3000

//Middlewares
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


//Register all routes
app.use(Posts)
app.use(Categories)

//Start the Server
app.listen(port, () => { console.log(`Server listening at ${port}`) })
