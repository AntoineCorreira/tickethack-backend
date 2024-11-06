const express = require('express');
const router = express.Router();

let cart = [];
let bookings = [];

// Route pour obtenir les items du panier
router.get('/cart', (req, res) => {
    res.json(cart);
});

// Route pour ajouter un item au panier
router.post('/cart', (req, res) => {
    const item = req.body;
    cart.push(item);
    res.status(201).send('Item added to cart');
});

// Route pour supprimer un item du panier
router.delete('/cart/:id', (req, res) => {
    const itemId = req.params.id;
    cart = cart.filter(item => item.id !== itemId);
    res.send('Item removed from cart');
});

// Route pour effectuer l'achat et transférer les items
router.post('/purchase', (req, res) => {
    bookings = [...bookings, ...cart];
    cart = []; // Réinitialiser le panier
    res.send('Purchase complete');
});

// Route pour obtenir les réservations
router.get('/bookings', (req, res) => {
    res.json(bookings);
});

module.exports = router;
