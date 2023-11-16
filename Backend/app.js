const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

// Configuración de la conexión a MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'farming_cor'
});

// Conectar a MySQL
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configurar CORS después de la inicialización de app
app.use(cors());

// Ruta para registrar un usuario
app.post('/registrar', (req, res) => {
  console.log('Recibida solicitud de registro:', req.body);
  // Realiza la inserción en la base de datos en la tabla 'datos'
  const { nombre1, nombre2, apellido1, apellido2, tipodoc, Num_Doc, correo, tel, direccion, usuario, rol, password } = req.body;
  const queryString = 'INSERT INTO Datos (Nombre1, Nombre2, Apellido1, Apellido2, Desc_doc, Num_Doc, Correo, Tel_Cel, Direccion, Usuario, Nom_rol, password) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?)';
  const values = [nombre1, nombre2, apellido1, apellido2, tipodoc, Num_Doc, correo, tel, direccion, usuario, rol, password];

  db.query(queryString, values, (err, result) => {
    if (err) {
      console.error('Error al registrar usuario en la base de datos:', err);
      res.status(500).json({ error: 'Error interno del servidor' });
    } else {
      console.log('Usuario registrado en la base de datos');
      res.status(200).json({ message: 'Usuario registrado exitosamente' });
    }
  });
});

// Ruta para iniciar sesión
app.post('/iniciar-sesion', (req, res) => {
    const { usuario, password } = req.body;
    console.log('Intento de inicio de sesión para el usuario:', usuario);
  
    const queryString = 'SELECT Nom_rol FROM Datos WHERE Usuario = ? AND password = ?';
  
    db.query(queryString, [usuario, password], (err, result) => {
      if (err) {
        console.error('Error al iniciar sesión:', err);
        res.status(500).json({ error: 'Error interno del servidor' });
      } else {
        console.log('Resultado de la consulta:', result);
  
        if (result.length > 0) {
          // Resto del código...
        } else {
          console.log('Credenciales incorrectas para el usuario:', usuario);
          res.status(401).json({ error: 'Credenciales incorrectas' });
        }
      }
    });
  });
  

app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});
