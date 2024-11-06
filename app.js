require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('./models/connection');

var indexRouter = require('./routes/index');

const app = express();
const cors = require('cors');
app.use(cors());

const port = 3000;  // Assurez-vous que le port est défini

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

module.exports = app;
