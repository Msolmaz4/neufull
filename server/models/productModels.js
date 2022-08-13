const momgoose = require('mongoose')

// sonra schemayi olusruruyoruy
const productSchema = new momgoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true,
        min:0
    },
    nun_favori:{
        type:Number,
        min:0,
        default:0
    },
    tags:{
        type:[String],
        default:[]
    },
    processin_min:{
        type:Number,
        min:0
    },
    processin_max:{
        type:Number,
        min:0
    },
    price:{
        type:Number,
        min:0,
        required:true
    },
    img:{
        type:String,
        default:''
    },
    taxonomy_id:{
        type:Number,
        required:true,
        enum:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
    },
    //satida gibi
    onSale:{
        type:Boolean,
        default:true,
        required:true

    },
    //sepete atilan
    inCard:{
        type:Number,
        min:0,
        default:0
    }
})

// 'Product' buyuk harfke yadiki ama bu kenfdini kucuk harfe cevirir
const Products = momgoose.Schema('Product',productSchema)
module.exports = Products