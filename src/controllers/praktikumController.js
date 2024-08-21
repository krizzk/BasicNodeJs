exports.profil = (req, res) =>{
    let name = req.params.name 
    let age = req.params.age 
    let response = {
        nama: name,
        umur: age
    }
    return res.json(response)
}

exports.bujurSangkar = (req, res) => {
    let panjang = Number(req.body.panjang)
    let lebar = Number(req.body.lebar)
    let luas = panjang * lebar
    let keliling = 2 * (panjang + lebar)
    let response ={
        panjang: panjang,
        lebar: lebar,
        luas: luas,
        keliling: keliling
    }
    return res.json(response)
}