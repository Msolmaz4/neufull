
const router = require('express').Router()

const allProductsController =require('../controllers/productController/allProductsController')


//router.post('/',) virgulden sonra kontroller yazilir 
//allProductsController sonra controllerde duzenleme yapilir

router.post('/',allProductsController)

module.exports =router