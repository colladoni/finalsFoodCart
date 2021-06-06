const express = require('express');
const router = express.Router();
const db =require('../config/database');
const Order = require('../models/takeOrders');


router.get('/', (req,res) =>
 Order.findAll()
 .then (orders => {
    res.render('orders', {
        orders
    });
})
 .catch(err => console.log(err)));


 router.get('/add', (req,res) => {
     const data = {
         order_id:'1',
         productName: 'ambot',
         price: '200',
         description: 'chasdka'
     }

     
 let {order_id,productName,price,description } = data;


 Order.create({
     order_id,
     productName,
     price,
     description
 })
 .then(Order => res.redirect('/orders'))
 .catch(err => console.log(err));
 });

module.exports = router;