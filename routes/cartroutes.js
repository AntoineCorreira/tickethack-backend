const express = require('express');
const router = express.Router();

let cart = [];

// Route pour obtenir les items du panier
router.get('/', (req, res) => {
    res.json(cart);
});

// Route pour ajouter un item au panier
router.post('/', (req, res) => {
    const item = req.body;
    cart.push(item);
    res.status(201).send('Item added to cart');
});

// Route pour supprimer un item du panier
router.delete('/:id', (req, res) => {
    const itemId = req.params.id;
    cart = cart.filter(item => item.id !== itemId);
    res.send('Item removed from cart');
});

module.exports = router;
