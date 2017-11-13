'use strict';
module.exports = function(sequelize, DataTypes) {
  var Contact = sequelize.define('Contact', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNumber: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Contact.belongsTo(models.User);
      }
    }
  });
  return Contact;
};