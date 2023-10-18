const express = require('express');
const router = express.Router();
const multer = require('multer');
const createDBConnection = require('../config/bd');

const ArchivoController = require('../controller/ArchivoController.js'); // Asegúrate de que el nombre del controlador sea correcto

  
  const upload = multer();

  // Ruta para subir el archivo
router.post('/RegistrarArchivo', upload.single('nameArchivo'), (req, res) => {
    if (!req.file) {
      return res.status(400).send('No se ha proporcionado un archivo.');
    }
  
    const nombreDelArchivo = req.file.originalname;
    ArchivoController.guardarArchivo(req, res);
  });
// Rutas para archivos
//router.post('/RegistrarArchivo', ArchivoController.guardarArchivo);
// Ruta GET para consultar la tabla y devolver un JSON
router.get('/consultarArchivo', (req, res) => {
    const db = createDBConnection();
    // Consulta SQL
    const consulta = 'SELECT * FROM archivo';
  
    // Ejecuta la consulta
    db.query(consulta, (error, resultado) => {
      if (error) {
        console.error('Error al consultar la tabla:', error);
        db.end();
        res.status(500).json({ error: 'Error al consultar la tabla' });
      } else {
        // Devuelve el resultado como JSON
        console.log(resultado);
        db.end();
        res.json(resultado);
      }
    });
  });
module.exports = router;
