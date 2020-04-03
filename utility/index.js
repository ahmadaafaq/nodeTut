const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRounds = 10;
const secret = 'secretkey';

const Utility = {
    createHash: password => {
        return new Promise((resolve, reject) => {
            bcrypt.hash(password, saltRounds, (err, hash) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(hash)
                }
            })
        })
    },
    comparePassword: (password, hash) => {
        return new Promise((resolve, reject) => {
            bcrypt.compare(password, hash, (err, isMatch) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(isMatch)
                }
            })
        })
    },
    verifyToken: (req, res, next) => {
        return new Promise((resolve, reject) => {
            const token = req.headers['x-access-token'];
            if (!token) {
                reject(res.send(401).status({ auth: false, message: 'No token provided' }))
            } else {
                jwt.verify(token, secret, (err, decoded) => {
                    if (err) {
                        reject(res.status(500).send({ auth: false, message: 'Failed to aunthenticate token' }))
                    } else {
                        req.body.userId = decoded.id;
                        resolve(next())
                    }
                })
            }
        })
    }
}

module.exports = Utility