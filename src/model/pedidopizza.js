
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