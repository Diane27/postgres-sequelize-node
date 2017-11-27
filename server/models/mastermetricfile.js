'use strict';
module.exports = function(sequelize, DataTypes) {
  var MasterMetricFile = sequelize.define('MasterMetricFile', {
    Unit: DataTypes.STRING,
    Key: DataTypes.STRING,
    KeySize: DataTypes.STRING,
    Location: DataTypes.STRING,
    DateMeasured: DataTypes.STRING,
    DateProcessed: DataTypes.STRING,
    ContactForceThreshold: DataTypes.INTEGER,
    PeakForceDown: DataTypes.DOUBLE,
    PeakForceUp: DataTypes.DOUBLE,
    PeakTravelDown: DataTypes.DOUBLE,
    PeakTravelUp: DataTypes.DOUBLE,
    PeakLagDown: DataTypes.DOUBLE,
    BottomForceDown: DataTypes.DOUBLE,
    BottomForceUp: DataTypes.DOUBLE,
    BottomTravelDown: DataTypes.DOUBLE,
    BottomTravelUp: DataTypes.DOUBLE,
    ClickRatioDown: DataTypes.DOUBLE,
    ClickRatioUp: DataTypes.DOUBLE,
    Travel80gDown: DataTypes.DOUBLE,
    Travel160gDown: DataTypes.DOUBLE,
    Travel500gDown: DataTypes.DOUBLE,
    DropStrokeRelativeToPeak: DataTypes.DOUBLE,
    SlopeBeforePeak: DataTypes.DOUBLE,
    SlopeAfterPeak: DataTypes.DOUBLE,
    BackSlope: DataTypes.DOUBLE,
    FinalSlope: DataTypes.DOUBLE,
    EnergyTotalDown: DataTypes.DOUBLE,
    EnergyTotalUp: DataTypes.DOUBLE,
    ForceAtMakePointDown: DataTypes.DOUBLE,
    DisplacementAtMakePointDown: DataTypes.DOUBLE,
    PercentOfTravelAtMakePointDown: DataTypes.DOUBLE,
    PeakForceRatioDownUp: DataTypes.DOUBLE,
    x: DataTypes.DOUBLE,
    y: DataTypes.DOUBLE,
    WarningFlag: DataTypes.INTEGER,
    WarningMessage: DataTypes.STRING,
    BPGVersion: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return MasterMetricFile;
};