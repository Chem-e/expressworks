
const express = require('express');
const app = express();
let path = process.argv[3] || './';
let port = process.argv[2];

app.listen(port);
app.use(express.static(path));