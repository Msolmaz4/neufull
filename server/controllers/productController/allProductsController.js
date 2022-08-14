const mongoose =require('mongoose')
const Products =require('../../models/productModels')

const allProductsController = async (req,res)=>{
try {
   const deme = await Products.find()
   console.log(deme.length)
   res.send(deme.length)
   
} catch (err) {
   console.log(err)
   
}

}

module.exports = allProductsController