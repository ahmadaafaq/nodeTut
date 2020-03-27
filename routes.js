const express = require('express');
const router = express.Router();
const authorController = require('./controller/author')

/* ---------------- AUTHOR ------------------*/
router.get('/get-authors', authorController.getAuthors);
router.get('/get-author/:id', authorController.getAuthorById);
router.post('/add-author', authorController.addAuthor);
router.post('/update-author', authorController.updateAuthor);
router.post('/delete-author', authorController.deleteAuthor);

module.exports = router;