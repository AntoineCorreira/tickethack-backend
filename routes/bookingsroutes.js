const express = require('express');
const router = express.Router();

let bookings = [];

// Route pour obtenir les réservations
router.get('/', (req, res) => {
    res.json(bookings);
});

// Route pour ajouter une nouvelle réservation
router.post('/', (req, res) => {
    const booking = req.body;
    bookings.push(booking);
    res.status(201).send('Booking added');
});

// Route pour effectuer l'achat et transférer les items du panier aux réservations
router.post('/purchase', (req, res) => {
    const cart = req.body.cart; 
    bookings = [...bookings, ...cart];
    res.send('Purchase complete');
});

module.exports = router;
