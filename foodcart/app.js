const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
let ejs = require('ejs');
var expressLayouts=require("express-ejs-layouts");


//Database
const db = require('./config/database');

//Test DB
db.authenticate()
    .then(()=> console.log('Database connected'))
    .catch(err =>console.log('Error: ' + err))

const app = express();

//ejs
app.use(expressLayouts);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

// Body Parser
app.use(bodyParser.urlencoded({extended: false}));


//Set static folder
app.use(express.static(path.join(__dirname, 'public')));

//Index route
app.get('/', (req,res)=> res.render('index', { layout: './layouts/landing'}));

//Order routes
app.use('/order', require('./routes/order'));

//login
app.get('/login', (req,res)=> res.render('login', { layout: './layouts/header'}));

//account routes
app.use('/login', require('./routes/accounts'));





const PORT = process.env.PORT || 8030;

app.listen(PORT, console.log('Server started on port %d', PORT));

