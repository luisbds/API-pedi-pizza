const Pedido = require('../model/pedido')
const Pizza = require('../model/pizza') 

module.exports = {
    async store (req, res) {
        const {pedido_id} = req.params
        const {pizza_id} = req.params

        const pedido = await Pedido.findByPk(pedido_id) 
        const pizza = await Pizza.findByPk(pizza_id)
        

        if(!pizza){ 
            return res.status(400).json({
                erro:"Pizza não existe"})
        }

        if(!pedido){ 
            return res.status(400).json({
                erro:"Pedido não existe"})
        }
        /*
        const pedido = await Pedido.create({item})
        */
       
        return res.json(pedido,pizza)  
    }
}

