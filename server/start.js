'use strict';

const express = require('express');
const volleyball = require('volleyball');
const bodyParser = require('body-parser')
const app = express();
const api = require('./api')

app.use(volleyball);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname));

app.use('/api', api)

app.listen(3000, function () {
  console.log('Server listening on port', 3000);
});
