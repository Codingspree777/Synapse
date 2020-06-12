const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());

//routes

const apiRoutes = require('./server/routes/apiRoutes.js');

app.get('/', (req, res)=>{
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser())



app.use('/api', apiRoutes);

app.use('/', (req, res) => {
  res.send('./client/index.js');
});


module.exports = app;
