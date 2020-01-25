const {Model, DataTypes} = require('sequelize')

class Pizza extends Model {
    static init(sequelize) {
        super.init({
           nome: DataTypes.STRING,
           preco: DataTypes.FLOAT, 
        }, {
             sequelize 
        })
    }
}

module.exports = Pizza