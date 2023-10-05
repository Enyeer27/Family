const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const app = express();

// Configuración de la base de datos MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'proyecto'
});

db.connect(err => {
  if (err) {
    console.error('Error de conexión a la base de datos:', err);
  } else {
    console.log('Conexión exitosa a la base de datos');
  }
});

app.use(cors());
// Configuración de bodyParser para analizar las solicitudes JSON
app.use(bodyParser.json());


// Ruta para registrar un usuario
app.post('/registrarUsuario', (req, res) => {
  const { nombre1, nombre2, apellido1, apellido2, tipodoc, Num_Doc, correo, direccion, usuario, rol, password } = req.body;

  // Realiza la lógica para insertar el nuevo usuario en la base de datos
  const queryString = 'INSERT INTO usuarios (nombre1, nombre2, apellido1, apellido2, Num_Doc, Correo, direccion, Usuario, password) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
  const values = [nombre1, nombre2, apellido1, apellido2, Num_Doc, correo, direccion, usuario,  password];

  db.query(queryString, values, (err, result) => {
    if (err) {
      console.error('Error al registrar el usuario:', err);
      return res.status(500).json({ error: 'Error al registrar el usuario' });
    }

    // Envía una respuesta de éxito
    return res.status(201).json({ message: 'Usuario registrado con éxito' });
  });
});

// Puerto en el que se ejecutará el servidor
const port = 3000;

app.listen(port, () => {
  console.log(`Servidor Node.js en ejecución en http://localhost:${port}`);
});
