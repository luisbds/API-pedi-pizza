const express = require('express')
const PizzaController = require('./controllers/Pizza-controller')
const routes = express.Router()

routes.post('/pizza', PizzaController.store) 

module.exports = routes

