const sequelize = require('./sequelize');

let db;
const connection = () => {
    if (!db) {
        db = sequelize.authenticate()
            .then(() => {
                console.log('Database connected');
            })
            .catch(err => {
                console.log('Error connecting database', err);
            })
    }
    return db;
}

module.exports = connection();