const {Model} = require('sequelize')

class Pedido extends Model {
    static associate(model) {
        pedido.belongsToMany(model.Pizza, {
            foreignKey: 'pizza_id',
            as: 'possuiPizza' 
        })
    }
}

module.exports = Pedido 

class Pizza extends Model {
    static associate(model) {
        pizza.belongsToMany(model.Pedido, {
            foreignKey: 'pedido_id',
            as: 'possuiPedido' 
        })
    }
}

module.exports = Pizza 