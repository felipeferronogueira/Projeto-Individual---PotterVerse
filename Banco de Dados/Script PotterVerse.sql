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
(default , 'Lufa-Lufa');

select * from casaHogwarts;

CREATE TABLE aviso (
	id INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
	descricao VARCHAR(150),
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);

select * from aviso;

create table quiz(
idQuiz int primary key,
nome varchar(45),
qtdQuestao int);

insert into quiz values 
(1, 'Quiz de Personagem', 10),
(2, 'Quiz de Lugares', 10),
(3, 'Quiz de Acontecimentos', 10);

create table pontuacao(
idPontuacao int auto_increment,
qtdAcertos int,
fkQuiz int,
foreign key (fkQuiz) references quiz(idQuiz),
fkUsuario int,
foreign key (fkUsuario) references usuario(id),
primary key (idPontuacao, fkQuiz, fkUsuario)
);

select * from pontuacao join usuario on fkUsuario = id order by qtdAcertos desc;
