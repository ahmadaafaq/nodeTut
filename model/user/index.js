const Sequelize = require('sequelize');
const sequelize = require('../../sequelize');

const UserModel = sequelize.define(
    'user', // table name
    {
        username: Sequelize.STRING,
        password: Sequelize.STRING,
        status: {
            type: Sequelize.ENUM,
            values: ['active', 'inactive']
        }
    },
    {
        timestamps: false,
        freezeTableName: true
    }
)

module.exports = UserModel;