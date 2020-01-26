const Pizza = require('../model/pizza') 

module.exports = {
    async store (req, res) {

        const {pizza_id} = req.params

        const pizza = await Pizza.findByPk(pizza_id)

        if(!pizza){ 
            return res.status(400).json({
                erro:"Pizza não existe"})
        }

        /*
        const pedido = await Pedido.create({item})
        */
       
        return res.json(pizza)  
    }
}

