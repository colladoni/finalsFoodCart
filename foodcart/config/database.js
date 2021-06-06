const Sequelize = require('sequelize');
module.exports = new Sequelize('foodcart', 'username', 'password', {
    host: "127.0.0.1",
    USER: "root",
     PASSWORD: "password",
    dialect: 'mysql',
    database: 'foodcart',
    operatorsAliases: 0,


    pool:{
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});