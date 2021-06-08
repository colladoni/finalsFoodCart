const express = require('express');
const router = express.Router();
const db = require('../config/database');
const account = require('../models/accounts');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

router.get('/login', (req,res)=> 
    account.findAll()
    .then(account => 
        res.render('accounts', {
            account
        }))
    .catch(err => console.log(err))
    );

//Display login form
router.get('/login', (req, res)=> res.render('login'));

//login
router.post('/login', (req,res)=>{
    let {email,password} = req.body;
    

    //Insert into table
    account.create({
       
       email,
       password
    })
    .then(account => res.redirect('/login'))
    .catch(err => console.log(err)); 

   
});

module.exports = router;