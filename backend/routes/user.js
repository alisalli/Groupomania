// Importation de "express"
const express = require('express');
// Importation des routes de "express"
const router = express.Router();

const userCtrl = require('../controllers/user'); //--Permet d'assocoé les controlers aux différentes routes
const auth = require('../middleware/auth');
const limitRate = require ('../middleware/limit-rate');

// Envoi des données du formulaire de Signup dans la collection "users" de MongoDB 
router.post('/signup', limitRate, userCtrl.signup);
// Envoi des données du formulaire de Login dans la collection "users" de MongoDB 
router.post('/login', limitRate, userCtrl.login);

//___________________Exportation des routes_________________//
module.exports = router;