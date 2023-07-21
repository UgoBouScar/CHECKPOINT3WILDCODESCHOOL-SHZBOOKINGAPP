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
VALUES ('Additiv Frequency', 1, 'AdditivFrequency.jpg', 'Additif Frequency consists of two talented guys who form a formidable team in the realm of electronic music. Their progressive punchy psychedelia genre transports listeners to otherworldly dimensions. In his solo projects, Choko takes the audience on a tribal-infused journey, fusing ancient rhythms with modern beats, while Proksima delves into cosmic soundscapes, blending ethereal melodies with pulsating basslines.', 'https://soundcloud.com/proksimamusic'),
       ('Alyosen', 2, 'Alyosen.jpg', 'Meet Alyosen, the rising star in the world of mental music. Despite starting relatively recently, he quickly honed his skills, crafting a universe of fierce and dark tunes. His music resonates with raw emotions and draws listeners into a vortex of intensity, where haunting melodies intertwine with relentless beats.', 'https://soundcloud.com/alyosen'),
       ('Bandikoot', 2,'Bandikoot.jpg', 'Bandikoot is a force to be reckoned with in the realm of techno. Specializing in the dark and violent side of the genre, his music hits like a sonic tidal wave. With thunderous kicks and mind-bending synths, he takes his audience on a heart-pounding journey, leaving them with an adrenaline rush like no other.', 'https://soundcloud.com/bandikooot'),
       ('Bertha', 2, 'Bertha.jpg', 'Bertha is a master of the acid core, known for creating razor-sharp tracks that cut through the soul. His compositions are finely tuned and carefully crafted, immersing listeners in a world of unrelenting rhythms and electrifying sounds. Each note takes the audience deeper into a hypnotic trance, captivated by the allure of his unique sonic landscape.', 'https://soundcloud.com/bertha_official'),
       ('Catharso', 4, 'Catharso.jpg', 'Step into Catharso \'s world of dirty house music, where colors and energy collide. His tracks are a kaleidoscope of sonic delights, painting the dancefloor with vibrant hues of sound. The groove is infectious, and the beats are relentless, creating an atmosphere of high-energy euphoria that keeps the crowd moving all night long.', 'https://soundcloud.com/catharso'),
       ('Choko', 5, 'Choko.jpg', 'Choko \'s music is a tapestry of tribal and hybrid elements, interwoven with dark yet colorful tones. His unique soundscapes evoke a sense of ancient rituals and futuristic technology merging seamlessly. With a flair for experimentation, Choko brings an enigmatic vibe to his productions, drawing the audience into a world of mystery and fascination.', 'https://soundcloud.com/9choko'),
       ('SHZ RECORDS',5,'bgshz.jpg', 'SHZ RECORDS is an independent label founded 8 years ago in the south of France. It gathers young, talented artists passionate about cutting-edge underground styles. Evolving with time, the label embraces new captivating musical vibes.

At the helm of this venture is Proksima, its founder, who also excels as a sound engineer, handling mastering through his own venture, Black Hole Studio. With a unique artistic vision, SHZ RECORDS continues to make its mark on the music scene by pushing the boundaries of creativity and propelling young talents towards promising horizons.','https://soundcloud.com/shzrecs');