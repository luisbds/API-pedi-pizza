const ItemPedido = require('../model/itemPedido')
const Pedido = require('../model/pedido') 

module.exports = {
    async store (req, res) {
        const {pedido_id} = req.params
        const {pizza, quantidade} = req.body

        const pedido = await Pedido.findByPk(pedido_id)
        
        if(!pedido){ 
            return res.status(400).json({
                erro:"Item não existe"})
        }
        /*
        const itempedido = await ItemPedido.create({pizza, quantidade}) 
        */
       const [itempedido, created] = await ItemPedido.findOrCreate({
           where: {pizza, quantidade} 
       })

       await pedido.addItemPedido(itempedido) 
       return res.json(itempedido) 
    }
}