const express = require('express');
const bodyParser = require("body-parser")
const app = express()

app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

const soal3C = require('../controllers/soal3C');

app.post("/decimal-to-binary", soal3C.DecimalToBinary);
app.post("/binary-to-decimal", soal3C.BinaryToDecimal);
app.post("/decimal-to-octal", soal3C.DecimalToOctal);
app.post("/decimal-to-hexadecimal", soal3C.DecimalToHexadecimal);

module.exports = app;