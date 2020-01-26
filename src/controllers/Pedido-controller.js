const Pedido = require('../model/pedido')

module.exports = {
    async store (req, res) {
        const {pizza_id} = req.params
        const {item} = req.body

        const find = await Pedido.findByPk(pizza_id)

        if(!find){
            return res.status(400).json({
                erro:"Usuario não existe"})
        }
        const pedido = await Pedido.create({item})

        return res.json(pedido) 
    }
}