DROP DATABASE IF EXISTS blogdb;


CREATE DATABASE blogdb;


USE blogdb;

CREATE TABLE styles (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nom VARCHAR(100) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8;



DROP TABLE IF EXISTS styles;
CREATE TABLE styles (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  nom VARCHAR(100) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8;


INSERT INTO styles (nom)
VALUES ('Progressiv Zenon'),
       ('Mentale'),
       ('Acid Core'),
       ('Dirty House'),
       ('Mental Acid Tekno');


DROP TABLE IF EXISTS artistes;

CREATE TABLE artistes (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  nom VARCHAR(255) NOT NULL,
  style_id INT,
  image VARCHAR(255),
  biographie TEXT,
  url VARCHAR(255),
  FOREIGN KEY (style_id) REFERENCES styles(id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;


INSERT INTO artistes (nom, style_id, image, biographie, url)
VALUES ('Additiv Frequency', 1, 'AdditivFrequency.jpg', 'Chôko & Proksima dans un monde psychédélique Zénon, référence à Iboga Records', 'https://soundcloud.com/proksimamusic'),
       ('Alyosen', 2, 'Alyosen.jpg', 'Baby Chôkô', 'https://soundcloud.com/alyosen'),
       ('Bandikoot', 2, 'Bandikoot.jpg', 'El Juanito le plus venère', 'https://soundcloud.com/bandikooot'),
       ('Bertha', 2, 'Bertha.jpg', 'Comme son nom, la grosse Bertha va tout ravager sur son passage', 'https://soundcloud.com/bertha_official'),
       ('Catharso', 4, 'Catharso.jpg', 'La princesse du label', 'https://soundcloud.com/catharso'),
       ('Choko', 5, 'Choko.jpg', 'Le prince du label', 'https://soundcloud.com/9choko'),
       ('SHZ RECORDS',1,'bgshz.jpg', 'Le Label','https://soundcloud.com/shzrecs');