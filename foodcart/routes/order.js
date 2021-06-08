const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Order = require('../models/orders');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

//Get order list
router.get('/', (req,res)=> 
    Order.findAll()
    .then(orders => 
        res.render('orders', {
            orders
        }))
    .catch(err => console.log(err))
    );

//Display add order form
router.get('/add', (req, res)=> res.render('add'));

//Add an order
router.post('/add', (req,res)=>{
    

    let {orderId, productName, price, description} = req.body;
    

    //Insert into table
    Order.create({
       
        orderId,
        productName,
        price,
        description
    })
    .then(orders => res.redirect('/order'))
    .catch(err => console.log(err)); 

   
});

//Search Order
router.get('/search', (req,res) =>{
    let { term } = req.query;  

    term=term.toLowerCase();
     
    Order.findAll({where:{ productName: { [ Op.like]: '%'+ term +'%' }} })
    .then(orders => res.render('search', {orders}))
    .catch(err => console.log(err));
});


router.get('/delete', (req, res)=> res.render('delete'));

// Delete Order
router.post('/delete',(req,res) =>{
    let {productName} = req.body;
    let data = Order.destroy({
        where: {
            productName: req.body.productName
        }
    })
    .then(orders => res.redirect('/order'))
    .catch(err => console.log(err));
    
});

router.get('/edit', (req, res)=> res.render('edit'));

// Update Order
router.post('/edit',(req,res) =>{
    let {price} = req.body;
    let data = Order.update({
        where: {
            price: req.body.price
        }
    })
    .then(orders => res.redirect('/order'))
    .catch(err => console.log(err));
    
});

module.exports = router;
