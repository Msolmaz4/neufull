const mongoose =require('mongoose')
const Products = require('../../models/productModels')



const oneProductController = (req,res) =>{
 // id yakalamak icin params kullandim
  try {
    const {id} = req.params
    if(id){
        const product = Products.findById(id).then((respa)=>{
            res.status(200).json({
                message:'oneproductsucces',
                data:respa
            })
        })
        .catch(err =>res.send('oneprodukerrr'))
         
        
    }
    
  } catch (error) {
    
  }

}
module.exports = oneProductController