const {Model, DataTypes} = require('sequelize')

class itemPedido extends Model {
    static init(sequelize) {
        super.init({
           pizza: DataTypes.STRING, 
           quantidade: DataTypes.STRING
        }, {
             sequelize,
             tableName: "itemPedido"  
        })
    }
}

module.exports = itemPedido 