const AuthorModel = require('../../model/author');

const authorController = {
    getAuthors: (req, res) => {
        return new Promise((resolve, reject) => {
            AuthorModel.findAll()
                .then(list => {
                    if (list.length > 0) {
                        resolve(res.status(200).send(list));
                    } else {
                        reject(res.status(204).send('No data found'));
                    }
                })
                .catch(err => {
                    reject(res.status(500).send('Error', err));
                })
        })
    },
    getAuthorById: (req, res) => {
        return new Promise((resolve, reject) => {
            AuthorModel.findByPk(req.params.id)
                .then(result => {
                    if (result) {
                        resolve(res.status(200).send(result))
                    } else {
                        reject(res.status(200).send('No data found'));
                    }
                })
                .catch(err => {
                    reject(res.status(500).send('Error', err));
                })
        })
    },
    addAuthor: (req, res) => {
        return new Promise((resolve, reject) => {
            AuthorModel.create(req.body)
                .then(saved => {
                    resolve(res.status(200).send('created successfully'));
                })
                .catch(err => {
                    reject(res.status(500).send('Error', err));
                })
        })
    },
    updateAuthor: (req, res) => {
        return new Promise((resolve, reject) => {
            AuthorModel.update({ city: req.body.city }, { where: { name: req.body.name } })
                .then(saved => {
                    resolve(res.status(200).send('updated successfully'));
                })
                .catch(err => {
                    reject(res.status(500).send('Error', err));
                })
        })
    },
    deleteAuthor: (req, res) => {
        return new Promise((resolve, reject) => {
            AuthorModel.destroy({ where: { name: req.body.name } })
                .then(saved => {
                    resolve(res.status(200).send('deleted successfully'));
                })
                .catch(err => {
                    reject(res.status(500).send('Error', err));
                })
        })
    }
}

module.exports = authorController;