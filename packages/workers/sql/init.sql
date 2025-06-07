DROP TABLE IF EXISTS "players";

CREATE TABLE IF NOT EXISTS "players"(
    id INTEGER NOT NULL PRIMARY KEY,
    name TEXT NOT NULL)
STRICT;

INSERT INTO "players"(id, name)
    VALUES (1, 'Alice'),
(2, 'Bob'),
(3, 'Charlie'),
(4, 'Diana'),
(5, 'Eve');

