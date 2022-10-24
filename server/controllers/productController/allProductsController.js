const mongoose =require('mongoose')
const Products =require('../../models/productModels')


//limit yazarak gonderdigimiy sazizi belirleriy
const allProductsController = async (req,res)=>{


try {
   // azrica page gondeririy sazga gexciclerini ayarlamak  icin limittten sonra skip 
   //komutu ile zapili page-1 carp limit
   //filteleme zapmak icin 
   //bunu on  tarafta paylodadan gonderecegiz
   const { keyword , taxonomy_id,min_price,max_price,page} = req.body
   //gelip gelmedigini g;rmek icin once bir debneme
   //console.log(keyword)
   //burada bizim bir find ta filtre zapacaksacak obje olmali
   //burada RegExp kullandik
   //once bir obje zapalim

   /**
    * 1
db.sonuclar.find({"puan" : {$gt: 70} });
ile “Greater Than” yani 70’den büyük diyerek 70’den yüksek puan almışlara eriştim.

1
db.sonuclar.find({"puan" : {$lt: 50} });
ile de “Less Than” yani 50’den küçük diyerek 50’den az puan almışlara eriştim.
    * 
    * 
    */
   
   let query = {}
   keyword ? query.title = new RegExp(keyword,'i') : null
   min_price ? query.price ={['$gte'] :min_price}:null
   max_price ? query.price ={['$lte'] :max_price}:null
   min_price && max_price ? query.price= {['$gte'] :min_price,['$lte'] :max_price } :null
   taxonomy_id ? query.taxonomy_id = taxonomy_id :null


//finda objeyi yerlestirilri


 //denemede bozle yaapriy
//res.send(deme)

 const deme = await Products.find(query).limit(20).skip((page-1)*20)
/*
const deme = await Products.find() basta boyle dene tamami gor gelip glmedifigni
console.log(deme.length)
 res.send(deme.length)
*/
 res.status(200).json({
   message:'succes',
   data:deme
 })

   
} catch (err) {
 res.send(err.message)
   
}

}

module.exports = allProductsController