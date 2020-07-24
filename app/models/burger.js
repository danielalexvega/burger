const Sequelize = require('sequelize');                    //reference to the Library
const sequelize = require('../config/connection.js');      // reference to our DB

const Burger = sequelize.define('burger', {
    routeName: Sequelize.STRING,
    burgerName: Sequelize.STRING,
    devoured: Sequelize.BOOLEAN
});

Burger.sync();
module.exports = Burger;