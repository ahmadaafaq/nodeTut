const Sequelize = require('sequelize');

const sequelize = new Sequelize('node_tutorial', 'root', '2412917@aA', { //db_nmae user password , config
    host: 'localhost',
    port: '8889',
    dialect: 'mysql'
});

module.exports = sequelize;