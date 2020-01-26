const express = require('express')
const PizzaController = require('./controllers/Pizza-controller')
const PedidoController = require('./controllers/Pedido-controller')
const routes = express.Router()

routes.post('/pedido', PedidoController.store) 
routes.post('/pizza', PizzaController.store) 

module.exports = routes

