 const express=require("express");
 const productRaja=require("../models/product")
 const { body,validationResult } = require("express-validator");
 const routers=express.Router();

/*@usage  : get all products
@url    :http://127.0.0.1:5000/api/products
@fields :no-fields
@method :get
@access :public*/
routers.get('/products',async(request,response)=>
{
    try{
        const allproducts = await productRaja.find();
        response.status(200).json({allproducts:allproducts})
    }
    catch(err){
        response.status(500).json({errors :[{msg:err.message}]});
    }
});




/*@usage  : get a single product
@url    :http://127.0.0.1:5000/api/products/:product_id
@fields :no-fields
@method :get
@access :public*/
routers.get('/products/:product_id',async(request,response)=>
{
    productId=request.params.product_id;
   try{
    singleproduct= await productRaja.findById(productId);
    response.status(200).json({singleproduct:singleproduct});
   }
   catch(err){
    response.status(500).json({errors :[{msg:err.message}]});
   }
});




/*@usage  : create a product
@url    :http://127.0.0.1:5000/api/products
@fields :name,img,price,qty,info
@method :post
@access :public*/
routers.post('/products',[
    body("name").notEmpty().withMessage("name is required"),
    body("image").notEmpty().withMessage("image is required"),
    body("price").notEmpty().withMessage("price is required"),
    body("qty").notEmpty().withMessage("qty is required"),
    body("info").notEmpty().withMessage("info is required"),
],async(request,response)=>
{
    const errors=validationResult(request);
    if(!errors.isEmpty()){
        return response.status(401).json({errors : errors.array()});
    }
    try{
        
        let myproduct ={
            name:request.body.name,
            image:request.body.image,
            price:request.body.price,
            qty:request.body.qty,
            info:request.body.info
        };
        myproduct=new productRaja(myproduct);
        myproduct=await myproduct.save(); //save into database
        response.status(200).json({
            msg:'producted created',
            myproduct:myproduct
        })  

    }
    catch(err){
      console.log(err);
      response.status(500).json({errors :[{msg:err.message}]});
    }
});





/*@usage  : update a product
@url    :http://127.0.0.1:5000/api/products/:product_id
@fields :name,img,price,qty,info
@method :put
@access :public*/
routers.put('/products/:product_id',async(request,response)=>
{
productId=request.params.product_id;
   try{
     const nowproduct= await productRaja.findById(productId);
     if(!nowproduct){
        return response.status(500).json({errors :[{msg:"No products found"}]});
     }
     updatedProduct = {
        name:request.body.name,
        image:request.body.image,
        price:request.body.price,
        qty:request.body.qty,
        info:request.body.info
       };
       updatingProduct= await productRaja.findByIdAndUpdate(productId,{
        $set:updatedProduct    
    },{new:true});  //ndew updated data

    response.status(200).json({
        msg:'producted updated',
        updatingProduct: updatingProduct
    })  
   }
   catch(err){
    response.status(500).json({errors :[{msg:err.message}]});
   }
});




/*@usage  : delete a product
@url    :http://127.0.0.1:5000/api/products/:product_id
@fields :no-fields
@method :delete
@access :public*/
routers.delete('/products/:product_id',async(request,response)=>
{
    productId=request.params.product_id;
    try{
        const nowproduct= await productRaja.findById(productId);
        if(!nowproduct){
           return response.status(500).json({errors :[{msg:"No products found"}]});
        }
        await productRaja.findByIdAndDelete(productId);
        response.status(200).json({
            msg:'producted deleted',
           
        })
    }
    catch(err){
        response.status(500).json({errors :[{msg:err.message}]});
    }
});


 
 module.exports=routers;