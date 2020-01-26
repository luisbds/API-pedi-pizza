const {Model, DataTypes} = require('sequelize')

class Pedido extends Model {
    static init(sequelize) {
        super.init({
           item: DataTypes.STRING, 
        }, {
             sequelize,
             tableName: "pedido"  
        })
    }
}

module.exports = Pedido