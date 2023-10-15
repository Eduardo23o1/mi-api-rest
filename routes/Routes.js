const express = require('express');
const router = express.Router();

const ArchivoController = require('../controller/ArchivoController.js'); // Asegúrate de que el nombre del controlador sea correcto

// Rutas para archivos
router.post('/RegistrarArchivo', ArchivoController.guardarArchivo);

module.exports = router;
