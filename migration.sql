CREATE TABLE meal (
    id SERIAL,
    kind TEXT,
    calories INTEGER
);

INSERT INTO meal (kind, calories) VALUES ('breakfast', 1200);
INSERT INTO meal (kind, calories) VALUES ('lunch', 1000);