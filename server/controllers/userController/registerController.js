const Users = require("../../models/userModels")
const bcrypt = require('bcrypt')



//frontan bilgigyi alip req.body esitledik
// sonra email kontrol ayaptik

const registerController = async (req,res)=>{

    try {
        const {name,surname,password,email }= req.body
        console.log(name,surname,password,email)

        if(!email || !password || !name || !surname) return res.send('doldurun')
        const emailCont = await Users.findOne({email :email})
        if(emailCont) return res.send('kullanici var')
        // yeni kullaniciyi 
        const newUser = await new Users({
            name:name,
            surname:surname,
            email:email,
            password: bcrypt.hashSync(password,8)
        })
        newUser.save()
        .then(()=>res.status(200).send('succes'))
        .catch((err)=>res.send('save falsv'))
        
    } catch (error) {
        console.log(error.message)
        res.send(err.message)
        
    }

}
module.exports =registerController