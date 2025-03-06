require('dotenv').config(); 

const express = require('express');
const mysql = require('mysql2');

const app = express();
const PORT = process.env.PORT || 3000;


const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});


db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err);
        return;
    }
    console.log('Connected to MySQL database');
});


app.get('/', (req, res) => {
    res.send('Express server with MySQL connection is running.');
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});