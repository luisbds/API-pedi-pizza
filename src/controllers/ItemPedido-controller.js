const ItemPedido = require('../model/itemPedido')

module.exports = {
    async store (req, res) {
        const {pedido_id} = req.params
        const {pizza, quantidade} = req.body

        const find = await ItemPedido.findByPk(pedido_id)
        
        if(!find){ 
            return res.status(400).json({
                erro:"Usuario não existe"})
        }

        const itempedido = await ItemPedido.create({pizza, quantidade}) 

        return res.json(itempedido) 
    }
}