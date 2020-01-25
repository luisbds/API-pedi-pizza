const Sequelize = require('sequelize')
const dbConfig = require('../config/database')
const Pizza = require('../model/pizza')
const connection = new Sequelize(dbConfig) 

Pizza.init(connection) 

module.exports = connection 