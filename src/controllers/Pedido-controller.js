const Pedido = require('../model/pedido')

module.exports = {
    async store (req, res) {
        const {item} = req.body

        const pedido = await Pedido.create({item})

        return res.json(pedido) 
    }
}