const mongoose=require("mongoose")

const productSchema=mongoose.Schema({
    name:{type:String,require:true},
    image:{type:String,require:true},
    price:{type:Number,require:true},
    qty:{type:Number,require:true},
    info:{type:String,require:true},
},{timeStamps:true});

const productR=mongoose.model('product',productSchema) 

module.exports=productR;