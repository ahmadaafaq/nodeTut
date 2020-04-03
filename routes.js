const express = require('express');
const router = express.Router();
const authorController = require('./controller/author')
const userController = require('./controller/user')
const { verifyToken } = require('./utility')

/* ---------------- AUTHOR ------------------*/
router.get('/get-authors', verifyToken, authorController.getAuthors);
router.get('/get-author/:id', verifyToken, authorController.getAuthorById);
router.post('/add-author', verifyToken, authorController.addAuthor);
router.post('/update-author', verifyToken, authorController.updateAuthor);
router.post('/delete-author', verifyToken, authorController.deleteAuthor);

/*----------------USER------------------------*/
router.post('/register', userController.register)
router.post('/update-user', userController.updateUser)
router.post('/login', userController.login)
router.post('/profile', verifyToken, userController.profile)

module.exports = router;