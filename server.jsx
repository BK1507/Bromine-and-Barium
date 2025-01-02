import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
const app = express();
const port = '3001';

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12345",
    database: "brominenbarium"
});

db.connect(err => {
    if (err) throw err;
    console.log("Connection established succesfully");
});

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});
