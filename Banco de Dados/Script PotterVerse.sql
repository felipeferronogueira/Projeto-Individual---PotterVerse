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

select * from usuario as u join casaHogwarts as c on u.fkcasa = c.id ;

select * from usuario;

select u.id, u.nome, u.cpf, u.email, u.senha, u.fkcasa, c.casa from usuario as u join casaHogwarts as c on u.fkcasa = c.id ;

select * from casaHogwarts;

insert into casaHogwarts values
(default , 'Grifinoria'),
(default , 'Sonserina'),
(default , 'Corvinal'),
(default , 'lufa-Lufa');

select * from casaHogwarts;

CREATE TABLE aviso (
	id INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
	descricao VARCHAR(150),
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);

select * from aviso;

select * from aviso as a join usuario as u on a.fk_usuario = u.id;

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

select * from pontuacao;

select qtdAcertos from pontuacao;

insert into pontuacao values
(default, 7, 1, 1),
(default, 6, 2, 1),
(default, 5, 3, 1),
(default, 10, 3, 1),
(default, 2, 2, 1),
(default, 4, 1, 1);

insert into pontuacao values
(default, 1, 3, 1),
(default, 3, 1, 1),
(default, 4, 2, 1),
(default, 0, 1, 1),
(default, 9, 3, 1),
(default, 8, 2, 1);

insert into pontuacao values
(default, 1, 3, 1),
(default, 3, 1, 1),
(default, 4, 2, 1),
(default, 10, 1, 1),
(default, 9, 3, 1),
(default, 8, 2, 1),
(default, 1, 3, 1),
(default, 3, 1, 1),
(default, 4, 2, 1),
(default, 0, 1, 1),
(default, 9, 3, 1),
(default, 8, 2, 1);


insert into pontuacao values
(default, 10, 1, 2),
(default, 10, 2, 2),
(default, 10, 3, 2);

insert into pontuacao values
(default, 10, 2, 1);

