const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const routes = require('./routes'); 

app.use(bodyParser.json());
app.use('/', routes); 

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
