'use strict';

var csv       = require('fast-csv'); 
var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');
var basename  = path.basename(module.filename);
var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/../config.json')[env];
var db        = {};
var stream    = fs.createReadStream("./server/models/contacts.csv");
var async     = require('async')
var Contacts = require('./contact');

/* Connects to database */
var sequelize = new Sequelize('postgres://diane:password@localhost:5432/todos');

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

/* Already Existing from tutorial */
if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}
var model;
fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== basename);
  })
  .forEach(function(file) {
    if (file.slice(-3) !== '.js') return;
   model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });
 
 /* Read from csv and store in db */
var inserter = async.cargo(function(tasks, inserterCallback) {
    model.bulkCreate(tasks).then(function() {
        inserterCallback(); 
      }
    );
  },
  1000
);
var parser = csv.fromStream(stream, {headers : true}).on("data", function(data) {
  parser.pause();
  console.log(data);
  //inserter.push(data);
  parser.resume();
}).on("end", function(){
  console.log('end of saving file');
});


/* Already Existing from tutorial */
Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;