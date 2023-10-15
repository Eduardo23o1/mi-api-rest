const createDBConnection = require('../config/bd');
const db = createDBConnection();

const Archivos = {
  // Función para guardar un nuevo archivo
  create: (nuevoArchivo) => {
    return new Promise((resolve, reject) => {
      // Obtén el contenido del archivo de nuevoArchivo.contenido_archivo
      const contenidoArchivo = nuevoArchivo.contenido_archivo;

      // Realizar la inserción en la base de datos
      db.query(
        'INSERT INTO archivo (contenido_archivo) VALUES (?)',
        [contenidoArchivo],
        (dbError, results) => {
          if (dbError) {
            return reject(dbError);
          }
          return resolve(results.insertId);
        }
      );
    });
  },
};

module.exports = Archivos;
