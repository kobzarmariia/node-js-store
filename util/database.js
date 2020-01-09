const Sequelize = require('sequelize');

const sequelize = new Sequelize('node_js', 'root', 'livihu90', {
  dialect: 'mysql', 
  host: 'localhost'
});

module.exports = sequelize;