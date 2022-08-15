const mongoose =require('mongoose')
const Products =require('../../models/productModels')


//limit yazarak gonderdigimiy sazizi belirleriy
const allProductsController = async (req,res)=>{


try {
   // azrica page gondeririy sazga gexciclerini ayarlamak  icin limittten sonra skip 
   //komutu ile zapili page-1 carp limit
   //filteleme zapmak icin 
   const { keyword , taxonomy_id,min_price,max_price} = req.body
   //gelip gelmedigini g;rmek icin once bir debneme
   //console.log(keyword)
   //burada bizim bir find ta filtre zapacaksacak obje olmali
   //burada RegExp kullandik
   //once bir obje zapalim
   
   let query = {}
   keyword ? query.title = new RegExp(keyword,'i') : null
   min_price ? query.price ={['$gte'] :min_price}:null
   max_price ? query.price ={['$lte'] :max_price}:null
   min_price && max_price ? query.price= {['$gte'] :min_price,['$lte'] :max_price } :null
   taxonomy_id ? query.taxonomy_id = taxonomy_id :null


//finda objeyi yerlestirilri
   const deme = await Products.find({query}).limit(20).skip((page-1)*20)
 //denemede bozle yaapriy
//res.send(deme)

 res.stataus(200).json({
   mesasge:'succes',
   data:deme
 })

   
} catch (err) {
 res.send(err.mesasge)
   
}

}

module.exports = allProductsController