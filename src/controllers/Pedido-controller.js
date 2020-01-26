const Pedido = require('../model/pedido')
const Pizza = require('../model/pizza') 

module.exports = {
    async store (req, res) {
        const {pizza_id} = req.params
        const {item} = req.body

        const pizza = await Pizza.findByPk(pizza_id)

        if(!pizza){ 
            return res.status(400).json({
                erro:"Pedido não existe"})
        }
        /*
        const pedido = await Pedido.create({item})
        */
        const [pedido, created] = await Pedido.findOrCreate({
            where : {item} 
        }) 

        await pizza.addPedido(pedido) 

        return res.json(pedido) 
    }
}