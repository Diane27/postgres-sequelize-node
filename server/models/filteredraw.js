'use strict';
module.exports = function(sequelize, DataTypes) {
  var FilteredRaw = sequelize.define('FilteredRaw', {
    Unit: DataTypes.STRING,
    Key: DataTypes.STRING,
    KeySize: DataTypes.STRING,
    Location: DataTypes.STRING,
    DateMeasured: DataTypes.STRING,
    DateProcessed: DataTypes.STRING,
    Time: DataTypes.DOUBLE,
    Displacement: DataTypes.DOUBLE,
    Force: DataTypes.DOUBLE,
    Voltage: DataTypes.DOUBLE,
    KeyID: DataTypes.INTEGER,
    Step: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return FilteredRaw;
};