create database potterverse;

use potterverse;

CREATE TABLE casaHogwarts (
	id INT PRIMARY KEY AUTO_INCREMENT,
	casa varchar(15),
    constraint chkCasa check (casa in ('Sonserina','Grifinoria','Corvinal','Lufa-Lufa'))
);

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
    cpf char(11),
	email VARCHAR(50),
	senha VARCHAR(50),
	fkcasa INT,
	FOREIGN KEY (fkcasa) REFERENCES casaHogwarts(id)
);

select * from usuario;

select * from casaHogwarts;

insert into casaHogwarts values
(default , 'Grifinoria'),
(default , 'Sonserina'),
(default , 'Corvinal'),
(default , 'lufa-Lufa');

select * from casaHogwarts;
