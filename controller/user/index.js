const jwt = require('jsonwebtoken');
const UserModel = require('../../model/user');
const Utility = require('../../utility');
const secret = 'secretkey';

const userController = {
    register: (req, res) => {
        return new Promise((resolve, reject) => {
            const payload = req.body;
            Utility.createHash(payload.password)
                .then(hash => {
                    payload.password = hash;
                    UserModel.create(payload)
                        .then(user => {
                            const token = jwt.sign({ id: user.id }, secret, {
                                expiresIn: 86400 // 24 hours
                            })
                            resolve(res.status(200).send({ auth: true, token: token }))
                        })
                        .catch(err => {
                            reject(res.status(204).send('Error ', err))
                        })
                })
                .catch(err => {
                    reject(err);
                })
        })
    },
    updateUser: (req, res) => {

    },
    login: (req, res) => {
        return new Promise((resolve, reject) => {
            UserModel.findOne({
                where: { username: req.body.username }
            }).then(user => {
                if (user) {
                    Utility.comparePassword(req.body.password, user.password)
                        .then(isMatch => {
                            if (isMatch) {
                                const token = jwt.sign({ id: user.id }, secret, {
                                    expiresIn: 86400 // 24 hours
                                })
                                resolve(res.status(200).send({ auth: true, token: token }))
                            } else {
                                resolve(res.status(200).send('Username and password do not match'))
                            }
                        })
                }
            })
        })
    },
    profile: (req, res) => {
        return new Promise((resolve, reject) => {
            UserModel.findByPk(req.body.userId, { attributes: { exclude: ['password'] } })
                .then(user => {
                    if (!user) {
                        resolve(res.status(404).send('User not found'))
                    } else {
                        resolve(res.status(200).send(user))
                    }
                })
        });
    }
}

module.exports = userController;