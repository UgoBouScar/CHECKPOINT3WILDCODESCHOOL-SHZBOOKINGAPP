DROP TABLE IF EXISTS artistes;

CREATE TABLE
    artistes (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        nom VARCHAR(255) NOT NULL,
        style VARCHAR(100),
        image VARCHAR(255),
        biographie TEXT,
        url varchar(255)
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8;

INSERT INTO
    artistes (nom, style, image, biographie, url)
VALUES ( 
    'Additiv Frequency ',
    'Progressiv Zenon',
    'AdditivFrequency.jpg',
    'Chôko & Proksima dans un monde psychédélique Zénon, référence à Iboga Records',
    'https://soundcloud.com/proksimamusic'

);

INSERT INTO
    artistes (nom, style, image, biographie, url)
VALUES ( 
    'Alyosen',
    'Mentale',
    'Alyosen.jpg',
    'Baby Chôkô',
    'https://soundcloud.com/alyosen'
);
INSERT INTO
    artistes (nom, style, image, biographie, url)
VALUES ( 
    'Bandikoot',
    'Mentale, Acid Core',
    'Bandikoot.jpg',
    'El Juanito le plus venère',
    'https://soundcloud.com/bandikooot'
);

INSERT INTO
    artistes (nom, style, image, biographie, url)
VALUES ( 
    'Bertha',
    'Mentale, Acid Core',
    'Bertha.jpg',
    'Comme son nom, la grosse Bertha va tout ravager sur son passage',
    'https://soundcloud.com/bertha_official'
);

INSERT INTO
    artistes (nom, style, image, biographie, url)
VALUES ( 
    'Catharso',
    'Dirty House',
    'Catharso.jpg',
    'La princesse du label',
    'https://soundcloud.com/catharso'
);

INSERT INTO
    artistes (nom, style, image, biographie, url)
VALUES ( 
    'Choko',
    'Mental Acid Tekno',
    'Choko.jpg',
    'Le prince du label',
    'https://soundcloud.com/9choko'
);

