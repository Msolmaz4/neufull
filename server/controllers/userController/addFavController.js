const jwt_decode = require('jwt-decode')
const Products = require('../../models/productModels')
const Users = require('../../models/userModels')


const addFavController = async (req,res)=>{
    try {
        //buradaki id product 
        const {id}= req.params
        //token headergelr burasi onemli
        const {token} = req.headers
        const user = jwt_decode(token)
        //kontrol amacli 
        //console.log(user)
        const userId =user.userId
        if(!id) return res.send('invalid id')
        let product =  await Products.findById(id)
        if(!product) return res.send('bulunamadi')
        const userInfo =await Users.findById(userId)
        if(! userInfo.favs.find(el=>el._id == id)){
            userInfo.favs.push(product)
        
            userInfo.save()
            res.send(userInfo)
        }
        else{
            res.send('ekli')
        }
       


    } catch (error) {
        console.log(err.message)
        res.send('error')
    }

}
module.exports =addFavController