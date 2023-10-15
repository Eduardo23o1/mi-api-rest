const Archivo = require('../models/Archivos');

// Controlador para guardar un nuevo archivo
exports.guardarArchivo = (req, res) => {
  // Obtén los datos del archivo desde la solicitud (req.body)
  const nuevoArchivo = {
    id: req.body.id,
    nombre_archivo: req.body.nombre_archivo,
    ruta_archivo: req.body.ruta_archivo,
    // Otras propiedades del archivo según tu modelo
  };

  // Llama a la función del modelo para crear el archivo
  Archivo.create(nuevoArchivo)
    .then((archivo) => {
      return res.status(201).json({ message: 'Archivo creado con éxito', archivo });
    })
    .catch((error) => {
      console.error('Error al guardar el archivo:', error);
      return res.status(500).json({ error: 'Error interno del servidor' });
    });
};
