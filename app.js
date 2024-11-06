require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('./models/connection');

const indexRouter = require('./routes/index');
const bookingsroutesRouter = require('./routes/bookingsroutes');
const cartroutesRouter = require('./routes/cartroutes');

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
app.use('/bookings', bookingsroutesRouter);
app.use('/cart', cartroutesRouter);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});

module.exports = app;
