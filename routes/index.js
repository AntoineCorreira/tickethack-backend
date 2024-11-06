const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Importer les routes
const cartRoutes = require('./cartroutes');
const bookingsRoutes = require('./bookingsroutes');

app.use(bodyParser.json());


app.use('/cart', cartRoutes); 
app.use('/bookings', bookingsRoutes); 

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
