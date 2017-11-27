'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('MasterMetricFiles', {
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
      ContactForceThreshold: {
        type: Sequelize.INT
      },
      PeakForceDown: {
        type: Sequelize.DOUBLE
      },
      PeakForceUp: {
        type: Sequelize.DOUBLE
      },
      PeakTravelDown: {
        type: Sequelize.DOUBLE
      },
      PeakTravelUp: {
        type: Sequelize.DOUBLE
      },
      PeakLagDown: {
        type: Sequelize.DOUBLE
      },
      BottomForceDown: {
        type: Sequelize.DOUBLE
      },
      BottomForceUp: {
        type: Sequelize.DOUBLE
      },
      BottomTravelDown: {
        type: Sequelize.DOUBLE
      },
      BottomTravelUp: {
        type: Sequelize.DOUBLE
      },
      ClickRatioDown: {
        type: Sequelize.DOUBLE
      },
      ClickRatioUp: {
        type: Sequelize.DOUBLE
      },
      Travel @80gDown: {
        type: Sequelize.DOUBLE
      },
      Travel @160gDown: {
        type: Sequelize.DOUBLE
      },
      Travel @500gDown: {
        type: Sequelize.DOUBLE
      },
      DropStrokeRelativeToPeak: {
        type: Sequelize.DOUBLE
      },
      SlopeBeforePeak: {
        type: Sequelize.DOUBLE
      },
      SlopeAfterPeak: {
        type: Sequelize.DOUBLE
      },
      Back - Slope: {
        type: Sequelize.DOUBLE
      },
      Final - Slope: {
        type: Sequelize.DOUBLE
      },
      EnergyTotalDown: {
        type: Sequelize.DOUBLE
      },
      EnergyTotalUp: {
        type: Sequelize.DOUBLE
      },
      ForceAtMakePointDown: {
        type: Sequelize.DOUBLE
      },
      DisplacementAtMakePointDown: {
        type: Sequelize.DOUBLE
      },
      PercentOfTravelAtMakePointDown: {
        type: Sequelize.DOUBLE
      },
      PeakForceRatioDownUp: {
        type: Sequelize.DOUBLE
      },
      x: {
        type: Sequelize.DOUBLE
      },
      y: {
        type: Sequelize.DOUBLE
      },
      WarningFlag: {
        type: Sequelize.INT
      },
      WarningMessage: {
        type: Sequelize.STRING
      },
      BPGVersion: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('MasterMetricFiles');
  }
};