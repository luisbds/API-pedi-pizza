const Pedido = require('../model/pedido')
const Pizza = require('../model/pizza') 

module.exports = {
    async store (req, res) {
        const {item} = req.body
        const {pizza_id} = req.params

        console.log(pizza_id) 

        const pizza = await Pizza.findByPk(pizza_id)

        if(!pizza){ 
            return res.status(400).json({
                erro:"Pedido não existe"})
        }
        /*
        const pedido = await Pedido.create({item})
        */
       const pedido = await Pedido.create({
           item,
           pizza_id 
       }) 

        return res.json(pedido) 
    },
    async buscarPedido(req, res) {
        const {pizza_id} = req.params
        const pedido = await Pedido.findByPk(pizza_id, {
            include: {association:'pizza'}
        })
        return res.json(pedido) 
    }
}