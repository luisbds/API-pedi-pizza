const {Model} = require('sequelize')

class Pizza extends Model {
    static associate(model) {
        pizza.belongsToMany(model.Pedido, {
            foreignKey: 'pedido_id',
            as: 'possuiPedido' 
        })
    }
}

module.exports = Pizza