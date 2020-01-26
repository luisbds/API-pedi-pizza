'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    //dizer o que a migrations vai realizar na db
    return queryInterface.createTable('itempedido', {
      pizza_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model:'pedido', key:'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }, 
      pedido_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model:'itemPedido', key:'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    //se der alguma coisa errada o que tenho que fazer
   return queryInterface.dropTable('itempedido') 
  }
};
