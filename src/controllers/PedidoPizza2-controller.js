const Pedido = require('../model/pedido') 

module.exports = {
    async store (req, res) {

        const {pedido_id} = req.params

        const pedido = await Pedido.findByPk(pedido_id)

        if(!pizza){ 
            return res.status(400).json({
                erro:"Pedido não existe"})
        }

        /*
        const pedido = await Pedido.create({item})
        */
       
        return res.json(pedido)  
    }
}