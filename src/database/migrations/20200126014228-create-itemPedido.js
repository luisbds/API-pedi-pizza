'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    //dizer o que a migrations vai realizar na db
    return queryInterface.createTable('itemPedido', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      pizza: { 
        type: Sequelize.STRING,
        allowNull: false,
      },
      quantidade: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    //se der alguma coisa errada o que tenho que fazer
    return queryInterface.dropTable('itemPedido') 
  }
};
