const express = require('express');
const cors = require('cors');
// sempre quando for arquivo, deve-se colocar o ./ ou ../
const routes = require('./routes');

const app = new express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

