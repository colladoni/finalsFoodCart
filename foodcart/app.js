const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path= require('path');

const db = require('./config/database');
db.authenticate()
    .then(()=> console.log('Database connected'))
    .catch(err => console.log('Error!' +err))


const app = express();

app.get('/', (req,res)=> res.send ('INDEX'));

app.use('/orders', require('./routes/orders'));

const PORT = process.env.PORT || 8080;
app.listen(PORT, console.log('Server connected'));