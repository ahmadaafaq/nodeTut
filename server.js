//vanilla http server in node.js
// const http = require('http');
// const port = 8080;
// http.createServer((req, res) => {
//     res.end('Hello this is server testing')
// }).listen(port, () => console.log(`Server running on port http://localhost:${port}`));


//express server in node.js
const express = require('express');
const app = express();
const port = 8080;

const routes = require('./routes')

app.use('/', routes);
app.listen(port, () => console.log(`Server running on port http://localhost:${port}`));
