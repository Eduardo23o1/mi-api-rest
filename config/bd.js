const mysql = require('mysql2');

// Función para crear una conexión a la base de datos
function createDBConnection() {
  const connection = mysql.createConnection({
    host: '3.137.165.9', // Nombre o dirección IP del contenedor Docker MySQL
    user: 'root',
    password: '1234', // La contraseña que configuraste al iniciar el contenedor MySQL
    database: 'cloud'
  });

  // Maneja los eventos de conexión exitosa y error
  connection.connect((err) => {
    if (err) {
      console.error('Error al conectar a la base de datos:', err);
      return;
    }
    console.log('Conexión exitosa a la base de datos MySQL');
  });

  return connection;
}

module.exports = createDBConnection;
