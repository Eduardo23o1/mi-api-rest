const Archivo = require('../models/Archivos');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });




// Controlador para guardar un nuevo archivo
exports.guardarArchivo = async (req, res) => {
    // Obtén los datos del archivo desde la solicitud (req.body)
    const nuevoArchivo = {
      contenido_archivo: req.file.buffer,
      nombreDelArchivo: req.file.originalname,
      // Otras propiedades del archivo según tu modelo
    };
    // Llama a la función create del modelo Archivo
    Archivo.create(nuevoArchivo)
    .then((archivo) => {
      return res.status(201).json({ message: 'Archivo guardado con éxito', archivo });
    })
    .catch((error) => {
      console.error('Error al guardar el Archivo:', error);
      return res.status(500).json({ error: 'Error interno del servidor' });
    });
};
