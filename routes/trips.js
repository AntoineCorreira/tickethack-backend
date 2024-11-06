var express = require('express');
var router = express.Router();
const Trip = require('../models/trips');

router.post('/', (req, res) => { 
    const date = new Date(req.body.date);
    
    //Vérifier que tous les champs requis sont renseignés
    if(!req.body.departure || !req.body.arrival || !req.body.date) {
       return res.json({result: false, error: 'Some fields are missing'})
    } 

    //Rechercher les voyages avec les critères de départ et d'arrivée
    Trip.find({
        departure: req.body.departure, 
        arrival: req.body.arrival,
    })
    .then(data => {
        //Vérifier s'il y a des voyages
        if(data.length === 0) {
            return res.json({result: false, error: 'No trip found'});
        }
        //Ajouter les voyages trouvé dans un tableau
        let trips = [];
        for(let i=0; i < data.length; i++) {
            if(data[i].date.getFullYear() === date.getFullYear() 
            && data[i].date.getMonth() === date.getMonth()
            && data[i].date.getDate() === date.getDate()) {
                trips.push(data[i]);
            }
        }
        //Retourner les voyages correspondants
        return res.json({result: true, trips: trips});
    })    
    .catch(error => {
        res.json({result: false, error: error.message})
    })
    
})

module.exports = router;