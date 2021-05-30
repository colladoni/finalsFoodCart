const express = require('express');
const router = express.Router();
const db =require('../config/database');
const Order = require('../models/takeOrders');


router.get('/', (req,res) =>
 Order.findAll()
 .then (orders => {
     console.log(orders)
    res.sendStatus(200);
})
 .catch(err => console.log(err)));


module.exports = router;