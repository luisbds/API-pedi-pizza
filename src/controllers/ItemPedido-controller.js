const ItemPedido = require('../model/itemPedido')

module.exports = {
    async store (req, res) {
        const {pizza, quantidade} = req.body

        const itempedido = await ItemPedido.create({pizza, quantidade}) 

        return res.json(itempedido) 
    }
}