'use strict';

var csv       = require('csv-parser'); 
var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');
var basename  = path.basename(module.filename);
var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/../config.json')[env];
var db        = {};
var stream    = fs.createReadStream("./server/models/FilteredRaw.csv");
var async     = require('async')



/* Connects to database */
if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


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

//reading the headers from the file before creating the schema
stream
  .pipe(csv())
  .on('headers', function (headerList) {
    var item;
    for (item in headerList){
      console.log('Header %s: %s', item, headerList[item])
      //implement code to check if header match database here    
    }
  });

stream
  .pipe(csv())
  .on('data', function (data) {
    console.log(data);
    //inserter.push(data); to save data into database
  })
  .on("end", function(){
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
