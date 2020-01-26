const Pizza = require('../model/pizza')

module.exports = {
    async store (req, res) {
        const {nome, ingredientes, preco} = req.body

        const pizza = await Pizza.create({nome, ingredientes, preco})

        return res.json(pizza) 
    }
}