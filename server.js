import express from "express";
import postgres from "postgres";
import { readFile } from "node:fs/promises"


const sql = postgres({ database: 'calorie_tracker'})
const app = express();

app.use(express.json());
app.use(express.static("client"))

/*
app.get("/app.js", (req, res) => {
    readFile("/app.js", "utf-8").then((text) => {
        res.set("Content-Type", "application/javascript");
        res.send(text);
    });
});
*/


app.get("/meals", (req, res) => {
    sql `SELECT * FROM meal`.then((result) => {
        res.json(result)
    });
});


app. post("/meals", (req, res) => {
    const { kind, calories } = req.body;
    sql `INSERT INTO meal (kind, calories) VALUES (${kind}, ${calories}) RETURNING *`.then(
        (result) => {
            res.send(result[0])
        }
    )
});



app.listen(3000); 