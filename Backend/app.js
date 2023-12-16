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
  database: 'farming_cor1'
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
  const { Num_Doc, tipodoc, nombre1, nombre2, apellido1, apellido2, correo, tel, direccion, usuario, rol, password } = req.body;
  const queryString = 'INSERT INTO datos(id_user, fk_tipo_doc, nombre1, nombre2, apellido1, apellido2, correo, tel_cel, direccion, usuario, fk_tipo_rol, password) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?)';
  const values = [Num_Doc, tipodoc, nombre1, nombre2, apellido1, apellido2, correo, tel, direccion, usuario, rol, password];

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

  const query = `SELECT * FROM datos WHERE Usuario = ? AND password = ? AND fk_tipo_rol = ?`;
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

// ...

// ...

// Ruta para obtener información del proveedor
app.post('/obtenerInfoProveedor', (req, res) => {
  const { usuario } = req.body;

  console.log('Solicitud recibida en /obtenerInfoProveedor', { usuario });

  // Realiza la consulta en la base de datos usando el usuario recibido
  const query = 'SELECT * FROM datos WHERE Usuario = ?';
  db.query(query, [usuario], (error, results) => {
    if (error) {
      console.error('Error al obtener información del proveedor:', error);
      return res.status(500).json({ mensaje: 'Error interno del servidor' });
    }

    console.log('Resultados de la consulta:', results);

    if (results.length > 0) {
      // Devuelve la información del proveedor encontrado
      const proveedorInfo = results[0];
      return res.json(proveedorInfo);
    } else {
      // Maneja el caso donde no se encontró el proveedor
      return res.status(404).json({ mensaje: 'Proveedor no encontrado' });
    }
  });
});







app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});
