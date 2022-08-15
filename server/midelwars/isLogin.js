const jwt = require('jsonwebtoken')


const isLogin = (req,res,next)=>{

    try {
        const {token} =req.headers
        jwt.verify(token,process.env.AUTH_SEC_KEY,(err ,decoded)=>{
            if(err) return res.status(403).send('authislogin')
            req.token = token
            next()
        })

        
    } catch (error) {
        res.send('errr islogin')
        
    }

}



module.exports =isLogin