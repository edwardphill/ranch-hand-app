const express = require('express');
const app = express();
const mongoose = require('mo')
require('dotenv/config')


//import routes
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute)

//connect to db
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true}, () =>
console.log('connected to DB!'))