const jwt = require('jwt-decode')
const Users =require('../../models/userModels')


const checkAuth = async (req,res)=>{
    try {
        const token =req.token
        if(!token) return res.status(400).send('hataaich')
        const user =jwt(token)
        const userId = user.userId
        const userInfo =await Users.findById(userId)
        res.status(200).json({
            message:'succes',
            data:userInfo
        })
        
    } catch (error) {
        
    }

}
module.exports =checkAuth