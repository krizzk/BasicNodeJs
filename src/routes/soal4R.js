const express = require('express');
const bodyParser = require ("body-parser")
const app = express();

app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

const soal4C = require('../controllers/soal4C');

app.post("/bmi", soal4C.calculateBMI);

module.exports = app;
