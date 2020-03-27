// express server in node.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

const routes = require('./routes')

app.use('/', routes);
app.listen(port, () => console.log(`Server running on port http://localhost:${port}`));