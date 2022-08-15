const Users = require("../../models/userModels")
const bcrypt= require('bcrypt')
const jwt =require('jsonwebtoken')




const loginController = async (req,res) =>{

    try {
        const {email,password} = req.body
        //burada env dosyasinda direk duzeltme yaptik 
        //dotenv.config( { path:'.env'}) bu hale getirdik altaki satir kontrol icin
        //console.log(process.env.AUTH_SEC_KEY)
        if(!email || !password) return res.send('doldururn')
        //email kontroll
        const emailControl = await Users.findOne({email:email})
        if(!emailControl) return res.status(400).send('no user')
        //bu starira geldiyse okez bundan sonra kullanoccidan gelen sifreyi compare ile kullaniriy 
        //bu biye true veya false dondurur biri bizim gonderdigimiy digeri databasedeki
        const passworMatch =bcrypt.compareSync(password,emailControl.password)
        if(!passworMatch) return res.status(400).send('password hata')
        //token kurulrumu sign iki tane paramette alir
        const userToken =jwt.sign(
            { userId:emailControl._id},process.env.AUTH_SEC_KEY
        )
        //kontrol anmacli 
        //  console.log(userToken)
         //kullaniciya password gondermeyiy
         emailControl.password = null

         res.status(200).json({
            message:'succes',
            data:emailControl,
            token:userToken

         })
        
    } catch (error) {
        res.send(error.message)
        console.log(error.message)
        
    }

}
module.exports = loginController