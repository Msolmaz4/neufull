// bagalnti icin mongoo kurariz
const mongoose = require('mongoose')

//burada baglanti kutuphadene ki baglanti foksiyonu yazilir

const main = ()=>{
    mongoose.connect('mongodb://127.0.0.1:27017/eCommerce')//mongodb://ip/port/dbname
    .then(console.log('mongoose baglanti okey'))
    .catch((err)=>console.log(err))
}
main()