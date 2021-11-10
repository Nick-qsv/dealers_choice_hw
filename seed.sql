DROP TABLE IF EXISTS books;
DROP TABLE IF EXISTS authors;

CREATE TABLE authors (
    id SERIAL PRIMARY KEY,
    name TEXT DEFAULT NULL
);

CREATE TABLE books (
    id SERIAL PRIMARY KEY,
    authorId INTEGER REFERENCES authors(id) NOT NULL,
    title varchar(255) DEFAULT NULL,
    content TEXT DEFAULT NULL
);

INSERT INTO authors (name) VALUES ('Bradley Hope and Tom Wright');
INSERT INTO authors (name) VALUES ('James Dale Davidson and Lord William Rees-Moog');
INSERT INTO authors (name) VALUES ('Jon Halliday and Jung Chang');
INSERT INTO authors (name) VALUES ('David Graeber');
INSERT INTO authors (name) VALUES ('Anthony Beevor');


INSERT INTO books (authorId, title, content) VALUES ((SELECT id from authors where name='Bradley Hope and Tom Wright'), 'Billion Dollar Whale', 'Named a Best Book of 2018 by the Financial Times and Fortune, this thrilling (Bill Gates) New York Times bestseller exposes how a modern Gatsby swindled over $5 billion with the aid of Goldman Sachs in the heist of the century.');
INSERT INTO books (authorId, title, content) VALUES ((SELECT id from authors where name='James Dale Davidson and Lord William Rees-Moog'), 'The Sovereign Individual', 'Two renowned investment advisors and authors of the bestseller The Great Reckoning bring to light both currents of disaster and the potential for prosperity and renewal in the face of radical changes in human history as we move into the next century.');
INSERT INTO books (authorId, title, content) VALUES ((SELECT id from authors where name='Jon Halliday and Jung Chang'), 'Mao: The Unknown Story', 'Mao: The Unknown Story is a 2005 biography of Chinese Communist leader Mao Zedong written by the husband-and-wife team of writers Jung Chang and historian Jon Halliday, who depict Mao as being responsible for more deaths in peacetime than Adolf Hitler or Joseph Stalin.');
INSERT INTO books (authorId, title, content) VALUES ((SELECT id from authors where name='David Graeber'), 'Debt: The First 5,000 Years', 'Debt: The First 5,000 Years is a book by anthropologist David Graeber published in 2011. It explores the historical relationship of debt with social institutions such as barter, marriage, friendship, slavery, law, religion, war and government.');
INSERT INTO books (authorId, title, content) VALUES ((SELECT id from authors where name='Anthony Beevor'), 'Stalingrad: The Fateful Siege: 1942-1943', 'Stalingrad is a narrative history written by Antony Beevor of the battle fought in and around the city of Stalingrad during World War II, as well as the events leading up to it.');
