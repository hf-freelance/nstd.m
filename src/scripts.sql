DROP TABLE Item;
DROP TABLE Category;
DROP TABLE Contact;

CREATE TABLE IF NOT EXISTS Contact (
	idContact INTEGER PRIMARY KEY,
   	email TEXT NOT NULL,
	name TEXT,
    object TEXT NOT NULL,
    content TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS Category (
	idCategory INTEGER PRIMARY KEY,
    label TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS Item (
    idContact INTEGER PRIMARY KEY,
   	title TEXT NOT NULL,
	caption TEXT,
    imgReference TEXT NOT NULL,
    idCategory INTEGER,
    FOREIGN KEY (idCategory) 
      REFERENCES Category (idCategory) 
);

INSERT INTO Category (label) VALUES ('Linogravure');
INSERT INTO Category (label) VALUES ('Cyanotype');
INSERT INTO Category (label) VALUES ('Céramique');
INSERT INTO Category (label) VALUES ('Édition');
