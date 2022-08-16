const jwt_decode = require('jwt-decode')
const Products = require('../../models/productModels')
const Users = require('../../models/userModels')


const deleteFav = async (req,res)=>{
    try {
      
        const {id} =req.params
       const {token} = req.headers
       const user = jwt_decode(token)
       const {userId} =user
       if(!id) return res.send('invalid id')
       let product =await Products.findById(id)
       if(!product) return res.send('no prioduct')
       const userInfo =await Users.findById(userId)
       if(userInfo.favs.find(el =>el._id == id)){
        const newFavs = userInfo.favs.filter(el =>el._id != id)
        userInfo.favs =newFavs
        userInfo.save()
        res.send(userInfo)
       }
       else{
        res.send('no paramaetre')
       }

        
    } catch (error) {
        
    }

}

module.exports =deleteFav