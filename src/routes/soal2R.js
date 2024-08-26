const express = require('express')
const bodyParser = require("body-parser")
const app = express()

app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

const soal2C = require('../controllers/soal2C')

app.get("/celcius/:c",soal2C.celcius)
app.get("/farenheit/:f",soal2C.farenheit)
app.get("/kelvin/:k",soal2C.kelvin)
app.get("/reamur/:r",soal2C.reamur)

module.exports = app