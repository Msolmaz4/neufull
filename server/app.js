
//IMPORT  ONEMLI
const express = require('express')
const app = express()

 
const productRouter =require('./routes/productRouter.js')
const userRouter = require('./routes/userRouter')


//env doszasinin ayarlamak icin kullaniyoruy
const dotenv = require('dotenv')
//sonra config yapamamis gerekiyor
dotenv.config( { path:'.env'})
//.env ulastigimiy gormek icin
//console.log(process.env)

//cors kuraruz cunku burafd abackend ve fron arasi problem olmasin diye
const cors = require('cors')

// MIDLEWAS GELEN ISTEKLERIN BIR KONTROL GECTIG KESIN guvenilirmi gibi
// bu satir her yerden istek gelebilir
app.use(cors())


//body kisminda bir degisiklik zpainca gonderirken not js  bunu algilkamiyor bunu icin ayar yapiyoruy
app.use(express.urlencoded({ extended :false}))

//json formatindaki okuyabildigi bir yer
app.use(express.json())



//database baglanmak icin 
require('./db/db')


//app use /product olanlariproduct roter yonlendir
app.use('/products',productRouter)
app.use('/user',userRouter)



















//diger yerlerde kullanmak icin 
module.exports =app
