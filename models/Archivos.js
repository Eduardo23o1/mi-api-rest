const createDBConnection = require('../config/bd');


const AWS = require('aws-sdk');

// Configurar las credenciales y la región desde las variables de entorno
AWS.config.update({
  accessKeyId: "AKIA6GX53EAWYFMQUTEP",
  secretAccessKey: "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",
  region: 'us-east-2', // Cambia la región a la que corresponda
});
const fs = require('fs');

const s3 = new AWS.S3();

const bucketName = 'mybucketedtapia'; // Reemplaza con el nombre de tu bucket en S3

function funcion(key){
  const db = createDBConnection();
  return new Promise((resolve, reject) => {
      // Realizar la inserción en la base de datos
      db.query(
        'INSERT INTO archivo (contenido_archivo) VALUES (?)',
        [key],
        (dbError, results) => {
          if (dbError) {
            db.end();
            return reject(dbError);
          }
          db.end();
          return resolve(results.insertId);
        }
      );});
}

const Archivos = {
  // Función para guardar un nuevo archivo
  create: (nuevoArchivo) => {
    return new Promise((resolve, reject) => {
      // Obtén el contenido del archivo de nuevoArchivo.contenido_archivo
      const contenidoArchivo = nuevoArchivo.contenido_archivo;
      const key = nuevoArchivo.nombreDelArchivo; // Nombre del archivo en S3
      //Configurar los parámetros de subida
      const params = {
        Bucket: bucketName,
        Key: key,
        Body: contenidoArchivo,
      };
      s3.upload(params, (err, data) => {
        if (err) {
          console.error('Error al subir el archivo a S3:', err);
      console.log(params);
      reject(err);
        } else {
          console.log('Archivo subido exitosamente a S3:', data.Location);
      console.log(params);
      funcion(key).then(() => resolve());
        }
      });


    });
  },
};

module.exports = Archivos;
