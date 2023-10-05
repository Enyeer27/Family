create database Proyecto;
	use Proyecto;

create table Tipo_doc(
	Id_tipo_doc INT Not Null AUTO_INCREMENT,
	Desc_doc VARCHAR (25) Not Null,
	primary key(Id_tipo_doc)
);

create table Datos(
	Id_dato INT Not Null AUTO_INCREMENT,
	Id_doc_Id_tipo_doc INT Not Null,
	Nombre1 VARCHAR(10) Not Null,
	Nombre2 VARCHAR(10) Null,
	Apellido1 VARCHAR(10) Not Null,
	Apellido2 VARCHAR(10) Null,
	Num_Doc INT Not Null,
	Correo VARCHAR(45) Not Null,
	Tel_Cel INT Not Null,
	Direccion VARCHAR(50) Not Null,
	Usuario VARCHAR(25) Not Null,
	Roles VARCHAR(25) Not Null,
	password INT Not Null,
	primary key(Id_dato)
);

create table Roles(
	Id_rol INT Not Null AUTO_INCREMENT,
	Dato_Id_dato INT Not Null, 
	Estado_rol boolean Not Null,
	Nom_rol VARCHAR(25) Not Null,
	primary key(Id_rol)
);

create table Usuario(
	Id_usu INT Not Null AUTO_INCREMENT,
	Rol_Id_rol INT Not Null,
	Peso_Id_peso INT Not Null,
	Categoria_Id_categoria INT Not Null,
	Reserva_Id_reserva INT Not Null, 
	Nom_prod VARCHAR(25) Null,
	Cantidad INT Null,
	Num_local INT Null,
	Url_img_pro VARCHAR(100) Null,
	Codigo INT Null,
	primary key(Id_usu)
);

create table Reserva(
	Id_reserva INT Not Null AUTO_INCREMENT,
	Fecha datetime Not Null,
	Duracion datetime Not Null,
	primary key(Id_reserva)
);

create table Peso(
	Id_peso INT Not Null AUTO_INCREMENT,
	Desc_peso VARCHAR(20) Not Null,
	primary key(Id_peso)
);

create table Categoria(
	Id_categoria INT Not Null AUTO_INCREMENT,
	Nom_categoria VARCHAR(25) Not Null,
	primary key(Id_categoria)
);

ALTER TABLE Datos
ADD FOREIGN KEY (Id_doc_Id_tipo_doc)
REFERENCES Tipo_doc(Id_tipo_doc);

ALTER TABLE Roles
ADD FOREIGN KEY (Dato_Id_dato)
REFERENCES Datos(Id_dato);


ALTER TABLE Usuario
ADD FOREIGN KEY (Rol_Id_rol)
REFERENCES Roles(Id_rol);


ALTER TABLE Usuario
ADD FOREIGN KEY (Categoria_Id_categoria)
REFERENCES Categoria(Id_categoria);

ALTER TABLE Usuario
ADD FOREIGN KEY (Peso_Id_peso)
REFERENCES Peso(Id_peso);

ALTER TABLE Usuario
ADD FOREIGN KEY (Reserva_Id_reserva)
REFERENCES Reserva(Id_reserva);
