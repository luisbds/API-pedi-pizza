const Sequelize = require('sequelize')
const dbConfig = require('../config/database')
const Pizza = require('../model/pizza')
const Pedido = require('../model/pedido')
const ItemPedido = require('../model/itemPedido')
const PedidoPizza = require('../model/pedidoPizza')
const PedidoPizza2 = require('../model/pedidoPizza2')
const connection = new Sequelize(dbConfig) 

PedidoPizza.init(connection)
PedidoPizza2.init(connection) 
ItemPedido.init(connection) 
Pedido.init(connection) 
Pizza.init(connection) 

module.exports = connection 