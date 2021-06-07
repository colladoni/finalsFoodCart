const Sequelize = require('sequelize');
const db = require('../config/database');

const Order = db.define('order', {
    id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
    orderId:{
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    productName:{
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    price:{
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    description:{
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    }

})

module.exports = Order;