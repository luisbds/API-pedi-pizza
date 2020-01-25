const Pizza = require('../model/pizza')

module.exports = {
    async store (req, res) {
        const {nome, preco} = req.body

        const pizza = await Pizza.create({nome, preco})

        return res.json(pizza) 
    }
}