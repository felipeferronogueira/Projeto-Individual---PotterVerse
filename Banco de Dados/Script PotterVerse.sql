create database potterverse;

use potterverse;

CREATE TABLE casaHogwarts (
	id INT PRIMARY KEY AUTO_INCREMENT,
	casa varchar(15),
    constraint chkCasa check (casa in ('Sonserina','Grifinoria','Corvinal','Lufa-Lufa'))
);

insert into casaHogwarts values
(default , 'Grifinoria'),
(default , 'Sonserina'),
(default , 'Corvinal'),
(default , 'lufa-Lufa');

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
    cpf char(11),
	email VARCHAR(50),
	senha VARCHAR(50),
	fkcasa INT,
	FOREIGN KEY (fkcasa) REFERENCES casaHogwarts(id)
);

INSERT INTO usuario VALUES
(DEFAULT, 'Fernando Brandão', '12345678910', 'fernando.brandao@sptech.school', '123456', 1),
(DEFAULT, 'Kleber Nogueira', '12012940840', 'k.nogueira@hotmail.com', 'knog2024', 1),
(DEFAULT, 'Eliude Ferro', '11311013830', 'eliude@gmail.com', 'Amem@2024', 1),
(DEFAULT, 'Maite Sartori', '12312312312', 'maite.sartori@gamil.com', 'ma2024', 1),
(DEFAULT, 'Lara Isadora', '19876543210', 'laraisadora@hotmail.com', '123456', 1),
(DEFAULT, 'Felipe Ferro Nogueira', '48048016850', 'felipe.nogueira@sptech.school', 'e21s20@1', 1),
(DEFAULT, 'Draco Malfoy', '22345678910', 'draco@gmail.com', 'malfoy', 2),
(DEFAULT, 'Severus Snape', '35765765112', 'snape@yahoo.com', 'severus', 2),
(DEFAULT, 'Bianca', '40917616849', 'bianca@sptech.school', '#Gf10917616849', 3),
(DEFAULT, 'Murilo Martinez', '59071682991', 'murilo.martinez@sptech.school', '#Gf09071682991', 3),
(DEFAULT, 'Rubeo Hagrid', '11234567891', 'hagrid@gmail.com', 'hagrid', 3),
(DEFAULT, 'Minerva', '90123123111', 'minerva@hotmail.com', 'minerva', 4);


select * from usuario as u join casaHogwarts as c on u.fkcasa = c.id ;

select * from usuario;

select u.id, u.nome, u.cpf, u.email, u.senha, u.fkcasa, c.casa from usuario as u join casaHogwarts as c on u.fkcasa = c.id ;

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
(default, 4, 1, 1),
(default, 1, 3, 1),
(default, 3, 1, 1),
(default, 4, 2, 1),
(default, 0, 1, 1),
(default, 9, 3, 1),
(default, 8, 2, 1),
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
(default, 8, 2, 1),
(default, 10, 1, 2),
(default, 8, 2, 2),
(default, 6, 3, 2),
(default, 7, 3, 3),
(default, 9, 2, 3),
(default, 2, 1, 3),
(default, 1, 3, 4),
(default, 10, 2, 4),
(default, 10, 1, 4),
(default, 7, 3, 5),
(default, 1, 2, 5),
(default, 10, 1, 5),
(default, 7, 3, 6),
(default, 9, 2, 6),
(default, 4, 1, 6),
(default, 2, 3, 7),
(default, 9, 2, 7),
(default, 10, 1, 7),
(default, 1, 3, 8),
(default, 5, 2, 8),
(default, 9, 1, 8),
(default, 2, 3, 9),
(default, 3, 2, 9),
(default, 5, 1, 9),
(default, 3, 3, 10),
(default, 2, 2, 10),
(default, 1, 1, 10),
(default, 1, 3, 11),
(default, 8, 2, 11),
(default, 10, 1, 11),
(default, 4, 3, 12),
(default, 3, 2, 12),
(default, 1, 1, 12);
