  import { product } from '../../db/Product_Model.js'
import { vendor } from '../../db/Vendor_Model.js'
import { category } from '../../db/Category_Model.js'

  const createProducts=async(req,res)=>{


 const findVendorId = await vendor.findOne({where:{
 id : req.body.VendorId
 
   }
  
  }

)

 const CategoryIdId = await category.findOne({where:{
 id : req.body.CategoryId
 
   }
  
  }

)

if (findVendorId==null || CategoryIdId==null){
    res.send({message:'vendor and category is not found'})
    return
}

  await product.create(req.body).then((data)=>{
  

  res.send({message:'success',data:data})
  }).catch((err)=>{
console.log(err)
res.send({message:'you have error',error:err})

  })
  }



  
  const getAllProducts= async(req,res)=>{
 
   await product.findAll().then((data)=>{
 
 if (data.length == 0){
     res.send({message:'product is not found'})
 return;
 }
   res.send({message:'success',data:data})
   }).catch((err)=>{
 
 res.send({message:'you have error',error:err})
 
   })
 
  }
 
 



  const getProductsByVendorId= async(req,res)=>{
    await product.findAll({
  
  include: [{
  
      model :vendor
  }]
    }).then((data)=>{
  
  
  if (data.length == 0){
      res.send({message:'product is not found'})
  return;
  }
    res.send({message:'success',data:data})
    }).catch((err)=>{
  
  res.send({message:'you have error',error:err})
  
    })
  
  
   }
  

 




 const getProductsByCategoryId= async(req,res)=>{
  await product.findAll({

include: [{

    model :category
}]
  }).then((data)=>{

if (data.length == 0){
    res.send({message:'product is not found'})
return;
}
  res.send({message:'success',data:data})
  }).catch((err)=>{

res.send({message:'you have error',error:err})

  })


 }



 
 
 
 
 
  const getProductsById= async(req,res)=>{
 console.log(req.params.id)
   await product.findByPk(req.params.id).then((data)=>{
 
 if (data==null){
     res.send({message:'product is not found'})
 return;
 }
   res.send({message:'success',data:data})
   }).catch((err)=>{
 
 res.send({message:'you have error',err:err})
 
   })
 
 
 
 
  }
 const  deleteProducts= async(req,res)=>{
 
   await product.destroy({
 
 where:{
 id: req.params.id
 
 },
 
 
 
 }).then((data)=>{
 if (data==0){
     res.send({message:'product is not found'})
 }  
 res.send("deleted success")
 
 }).catch((err)=>{
 res.send({message:'you have error',error:err})
 
 
 })
 }

const updateProducts =async(req,res)=>{

  await product.update(req.body,{

where:{
id: req.params.id

},


}).then((data)=>{
if (data[0]==0){
    res.send({message:'product is not found'})
    return;
}  
res.send("update success")

}).catch((err)=>{
res.send({message:'you have error',error:err})


})
}







const getProductVendorById= async(req,res)=>{
  await product.findByPk(req.params.id,{

include: [{

    model :vendor
}]
  }).then((data)=>{

if (data==null){
    res.send({message:'product is not found'})
return;
}
  res.send({message:'success',data:data})
  }).catch((err)=>{

res.send({message:'you have error',error:err})

  })


 }





 export{

createProducts,
getAllProducts,
getProductsById,
deleteProducts,
updateProducts,
getProductVendorById,
getProductsByVendorId,
getProductsByCategoryId


 }