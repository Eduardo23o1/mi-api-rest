const createDBConnection = require('../config/bd');
const db = createDBConnection();

const Archivos = {
  // Función para guardar un nuevo archivo
  create: (nuevoArchivo) => {
    return new Promise((resolve, reject) => {
      db.query(
        'INSERT INTO new_table (id,nombre_archivo, ruta_archivo) VALUES (?,?, ?)',
        [nuevoArchivo.id,nuevoArchivo.nombre_archivo, nuevoArchivo.ruta_archivo],
        (error, results) => {
          if (error) {
            return reject(error);
          }
          return resolve(results.insertId);
        }
      );
    });
  },
};


module.exports = Archivos;