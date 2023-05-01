// using the express file the js file 
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const homeRouter = require('./rounters/homeRouter');
const port = process.env.port || 5000;
const app = express();

// data base connection 

mongoose.connect('mongodb://localhost:27017/studentData', { useNewUrlParser: true })
const db = mongoose.connection;
db.on("error", () => { console.log("error in connection "); })
db.once('open', () => { console.log("Connected"); })
// app set value in sever 
app.set('view engine', 'ejs');

app.use(express.static('public'))

// using body parser with url connected 
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/', homeRouter)

app.listen(port);
// then send the listen port