const Sequelize = require('sequelize')
const dbConfig = require('../config/database')
const Pizza = require('../model/pizza')
const Pedido = require('../model/pedido')
const ItemPedido = require('../model/itemPedido')
const connection = new Sequelize(dbConfig) 

ItemPedido.init(connection) 
Pedido.init(connection) 
Pizza.init(connection) 

module.exports = connection 