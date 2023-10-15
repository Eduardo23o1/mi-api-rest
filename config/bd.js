const mysql = require('mysql2');

// Función para crear una conexión a la base de datos
function createDBConnection() {
  const connection = mysql.createConnection({
    host: '3.147.65.206', // Nombre o dirección IP del contenedor Docker MySQL
    user: 'root',
    password: '1234', // La contraseña que configuraste al iniciar el contenedor MySQL
    database: 'archivo'
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
