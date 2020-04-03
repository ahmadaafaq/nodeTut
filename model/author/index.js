const Sequelize = require('sequelize');
const sequelize = require('../../sequelize');

const AuthorModel = sequelize.define(
    'authors', // table name
    {
        name: Sequelize.STRING,
        city: Sequelize.STRING,
        updated_by: Sequelize.INTEGER
    },
    {
        timestamps: false
    }
)

module.exports = AuthorModel;