const router = require('express').Router()
const registerController = require('../controllers/userController/registerController')
const loginController = require('../controllers/userController/loginController')
//bunu login olunc akontrol olarak yazdik
const isLogin =require('../midelwars/isLogin')

const addFavController = require('../controllers/userController/addFavController')
const deleteFav = require('../controllers/userController/deleteFav')
const checkAuth = require('../controllers/userController/checkAuth')





//planlama yapmak icin 
// POST => /register =>req.body
//Post => '/logib' =>req.body
//Post =>'/fav/:id' =>req.params
//delete =>'/fav/:id' =>req.params
//kullanici giris cikisi kontrol edecegiy sayfayi yenileyince duser 
//get =>'/checkAuth'=>req.headers

router.post('/register',registerController)
router.post('/login',loginController)
router.post('/fav/:id',addFavController,isLogin)
router.delete('/fav/:id',deleteFav,isLogin)
router.get('/checkAuth',checkAuth)



module.exports = router