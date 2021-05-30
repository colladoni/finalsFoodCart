const Sequelize = require('sequelize');
const db = require('../config/database');

const Order = db.define('orders', {
   order_id: {
        type: Sequelize.INTEGER,
        PrimaryKey: true
    },
    productName: {
        type: Sequelize.STRING
    },
    price: {
        type: Sequelize.INTEGER
    },
    description: {
        type: Sequelize.STRING
    }
})

module.exports = Order;