const express = require('express');
const app = express();

app.get('/api', (req, res) => {
    res.send('Hello this is our api')
});
app.get('/getFormData', (req, res) => {
    res.send('Hello this is form data')
});
app.get('/loginData', (req, res) => {
    res.send('Hello this is login data')
});

module.exports = app;