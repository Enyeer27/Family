CREATE DATABASE IF NOT EXISTS farming_cor1;
USE farming_cor1;

CREATE TABLE tipo_doc (
    id_tipo_doc INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    desc_doc VARCHAR(255) NOT NULL
);

CREATE TABLE roles (
    id_rol INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nom_rol VARCHAR(255) NOT NULL,
    estado INTEGER NOT NULL
);

CREATE TABLE datos (
    id_user INTEGER NOT NULL PRIMARY KEY,
    fk_tipo_doc INTEGER NOT NULL,
    nombre1 VARCHAR(255) NOT NULL,
    nombre2 VARCHAR(255) NOT NULL,
    apellido1 VARCHAR(255) NOT NULL,
    apellido2 VARCHAR(255) NOT NULL,
    correo VARCHAR(255) NOT NULL,
    tel_cel VARCHAR(255) NOT NULL,
    direccion VARCHAR(255) NOT NULL,
    usuario VARCHAR(255) NOT NULL,
    fk_tipo_rol INTEGER NOT NULL, -- Changed from VARCHAR(255)
    password VARCHAR(255) NOT NULL
);

ALTER TABLE datos
ADD CONSTRAINT fk_usuarios_rol
FOREIGN KEY (fk_tipo_rol)
REFERENCES roles(id_rol)
ON UPDATE CASCADE
ON DELETE CASCADE;

ALTER TABLE datos
ADD CONSTRAINT fk_usuarios_docu
FOREIGN KEY (fk_tipo_doc)
REFERENCES tipo_doc(id_tipo_doc)
ON UPDATE CASCADE
ON DELETE CASCADE;

-- Insert data into tipo_doc table
INSERT INTO tipo_doc (desc_doc) VALUES
('cedula ciudadania'),
('cedula extranjeria');

-- Insert data into roles table
INSERT INTO roles (nom_rol, estado) VALUES
('usuario', 1),
('proveedor', 1),
('administrador', 1);

INSERT INTO datos(id_user, fk_tipo_doc, nombre1, nombre2, apellido1, apellido2, correo, tel_cel, direccion, usuario, fk_tipo_rol, password) VALUES
('103154', 1, 'santiago', '', 'salamanca','diaz', 'santiago@gmail.com','3112340332', 'Diagonal 48 d bis sur', 'santixl', 3, '123');