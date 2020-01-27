const Pizza = require('../model/pizza')

module.exports = {
    async store (req, res) {
        const {nome, ingredientes, preco} = req.body

        const pizza = await Pizza.create({nome, ingredientes, preco})

        return res.json(pizza) 
    },

    async ListarPizza(req, res) {
        const listapizza = await Pizza.findAll()
        return res.json(listapizza) 
    }
}