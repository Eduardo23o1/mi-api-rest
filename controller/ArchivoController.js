const Archivo = require('../models/Archivos');

// Controlador para guardar un nuevo archivo
exports.guardarArchivo = async (req, res) => {

    // Obtén los datos del archivo desde la solicitud (req.body)
    const nuevoArchivo = {
      contenido_archivo: req.body.contenido_archivo,
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
