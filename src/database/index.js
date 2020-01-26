const Sequelize = require('sequelize')
const dbConfig = require('../config/database')
const Pizza = require('../model/pizza')
const Pedido = require('../model/pedido')
const connection = new Sequelize(dbConfig) 

Pedido.init(connection) 
Pizza.init(connection) 

module.exports = connection 