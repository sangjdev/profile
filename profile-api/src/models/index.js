const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(module.filename);
const { DB_HOST, DB_USER, DB_PASSWORD } = process.env;
const config = {
  host: DB_HOST,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  define: {
    underscored: true,
    freezeTableName: true
  }
};

const sequelize = new Sequelize('profile', DB_USER, DB_PASSWORD, config);
const db = {};

fs.readdirSync(__dirname)
  .filter(file => {
    return file.indexOf('.') !== 0 && file !== basename;
  })
  .forEach(file => {
    const model = sequelize.import(path.join(__dirname, file));

    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
