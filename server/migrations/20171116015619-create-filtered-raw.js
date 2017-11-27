'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('FilteredRaws', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Unit: {
        type: Sequelize.STRING
      },
      Key: {
        type: Sequelize.STRING
      },
      KeySize: {
        type: Sequelize.STRING
      },
      Location: {
        type: Sequelize.STRING
      },
      DateMeasured: {
        type: Sequelize.STRING
      },
      DateProcessed: {
        type: Sequelize.STRING
      },
      Time: {
        type: Sequelize.DOUBLE
      },
      Displacement: {
        type: Sequelize.DOUBLE
      },
      Force: {
        type: Sequelize.DOUBLE
      },
      Voltage: {
        type: Sequelize.DOUBLE
      },
      KeyID: {
        type: Sequelize.INT
      },
      Step: {
        type: Sequelize.INT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('FilteredRaws');
  }
};