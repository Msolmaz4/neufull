const router = require('express').Router()
const registerController = require('../controllers/userController/registerController')
const loginController = require('../controllers/userController/loginController')
const isLogin =require('../midelwars/isLogin')




//planlama yapmak icin 
// POST => /register =>req.body
//Post => '/logib' =>req.body
//Post =>'/fav/:id' =>req.params
//delete =>'/fav/:id' =>req.params
//kullanici giris cikisi kontrol edecegiy sayfayi yenileyince duser 
//get =>'/checkAuth'=>req.headers

router.post('/register',registerController)
router.post('/login',loginController)



module.exports = router