const express = require("express")  
const cors = require("cors")
const app = express()

app.use(cors())

//import routes
const praktikum = require('./routes/praktikumRoute')
const soal1 = require('./routes/soal1Route')

//implementasi routes

app.use('/praktikum',praktikum)
app.use('/soal1', soal1)

app.get("/test", (req,res) => {
 let response = {
    message: "Ini end-point pertama ku",
    method: req.method,
    code: res.statusCode
    }
    res.json(response)
   })
   app.listen(8000, () => {
    console.log("Server run on port 8000");
   })