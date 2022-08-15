const mongoose =require('mongoose')
const Products =require('./models/productModels')

const main = ()=>{
  mongoose.connect('mongodb://localhost:27017/eCommerce')//mongodb://ip/port/dbname
  .then(console.log('mongoose baglanti okey'))
  .catch((err)=>console.log(err))
}
main()


      

Products.insertMany([
{
  title: 'The &quot;',
  description: 'Ball is life for your family.',
  quantity: 09,
  num_favorers: 39,
  tags: [
    'girlfriend gift',
    'dad hat',
    'hats',
    'embroidery',
    'embroidered',
    'baseball cap',
    'personalized gift',
    'Baskteball Mom',
    'Team Mom',
    'Basketball dad hats',
    'Momslife',
    'Mom Coach',
    'Mom Gifts'
  ],
  processing_min: 3,
  processing_max: 5,
  price: 22.99,
  img: 'https://i.etsystatic.com/14221782/r/il/623996/2906244845/il_fullxfull.2906244845_lhor.jpg',
  onSale: true,
  taxonomy_id: 1
},
{
  title: 'River Bend  2&quot;x4&quot;.',
  description: 'These steel belt buckles are individually handmade in Bozeman, Montana.T his belt buckle has an extreme',
  quantity: 89,
  num_favorers: 74,
  tags: [
    'Belt Buckle',
    'Birthday',
    'Montana',
    'Barbed Wire',
    'Buckle',
    'Custom Welded',
    'Steel metal',
    'Contemporary Country',
    'Groomsman gifts',
    'Mens or Womens Gift',
    'Father Gift',
    'Boyfriend present',
    'Mens Belt Buckle'
  ],
  processing_min: 5,
  processing_max: 10,
  price: 119.95,
  img: 'https://i.etsystatic.com/7409307/r/il/96f4d3/664611099/il_fullxfull.664611099_n4fv.jpg',
  onSale: true,
  taxonomy_id: 1
}



]).then(console.log('seeds geleiyor'))
.catch(err=>console.log(err))
 