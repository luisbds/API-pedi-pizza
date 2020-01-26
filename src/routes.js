const express = require('express')
const PizzaController = require('./controllers/Pizza-controller')
const PedidoController = require('./controllers/Pedido-controller')
const ItemPedidoController = require('./controllers/ItemPedido-controller')
const PedidoPizzaController = require('./controller/PedidoPizza-controller')
const routes = express.Router()

routes.get('/', (req, res) => {
    return res.json({hello: "Olá"})
}) 

routes.post('/pedidopizza', PedidoPizzaController.store)
routes.post('/itemPedido', ItemPedidoController.store) 
routes.post('/pedido', PedidoController.store) 
routes.post('/pizza', PizzaController.store) 

module.exports = routes

