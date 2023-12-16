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

//inisio de sesion
app.post('/autenticar', (req, res) => {
  const { usuario, password, rol } = req.body;

  console.log('Datos recibidos:', { usuario, password, rol });

  const query = `SELECT * FROM datos WHERE Usuario = ? AND password = ? AND Nom_rol = ?`;
  db.query(query, [usuario, password, rol], (error, results) => {
    if (error) {
      console.error('Error en la autenticación:', error);
      return res.status(500).json({ mensaje: 'Error en la autenticación' });
    }

    console.log('Resultados de la consulta:', results);

    if (results.length > 0) {
      return res.json({ mensaje: 'Autenticación exitosa' });
    } else {
      return res.status(401).json({ mensaje: 'Credenciales incorrectas' });
    }
  });
});



  

app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});
