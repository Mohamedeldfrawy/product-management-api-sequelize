  import { vendor } from '../../db/Vendor_Model.js'
  import {product} from '../../db/Product_Model.js'




export const createVendor = async(req,res)=>{

  await vendor.create(req.body,{

}).then((data)=>{

  res.send({message:'success',data:data})
  }).catch((err)=>{


    if (req.body.name ==null || req.body.name.length ==0){
         res.send({message:'name is null '})
         return
    }
     else if (err.fields){
      res.send({message:'Email already exists'})
     
      

      
   
    }
    
   

})
}








 export const getAllVendors= async(req,res)=>{
 
   await vendor.findAll().then((data)=>{
  
 if (data.length == 0){
     res.send({message:'vendor is not found'})
 return;
 }
   res.send({message:'success',data:data})
   }).catch((err)=>{
 
 res.send({message:'you have error',error:err})
 
   })
 
 }




 

 export const getVendorsByEmail= async(req,res)=>{
 
   await vendor.findOne({where:{
 email : req.body.email
 
   }}).then((data)=>{
     if (data==null){
          res.send({message:'vendor is not found'})
 
     }
 
   res.send({message:'success',data:data})
   }).catch((err)=>{
 
 res.send({message:'you have error',error:err})
 
   })
 
  }
 
 


   export const getVendorsByProducts= async(req,res)=>{
    await vendor.findAll({
  
  include: [{
  
      model :product
  }]
    }).then((data)=>{
  
  if (data.length == 0){
      res.send({message:'vendor is not found'})
  return;
  }
    res.send({message:'success',data:data})
    }).catch((err)=>{
  
  res.send({message:'you have error',error:err})
  
    })
  
  
   }
  


  export const getVendorById= async(req,res)=>{
     await vendor.findByPk(req.params.id).then((data)=>{
   
   if (data==null){
       res.send({message:'vendor is not found'})
   return;
   }
     res.send({message:'success',data:data})
     }).catch((err)=>{
   
   res.send({message:'you have error',error:err})
   
     })
   
   
   
   
    }
   




 export const  deleteVendor=async(req,res)=>{

  await vendor.destroy({

where:{
id: req.params.id

},



}).then((data)=>{
if (data==0){
    res.send({message:'vendor is not found'})
}  
res.send({message:'deleted success'})
}).catch((err)=>{
res.send({message:'you have error',error:err})


})
}


  
export const updateVendor =async(req,res)=>{

  await vendor.update(req.body,{

where:{
id: req.params.id

},


}).then((data)=>{
if (data[0]==0){
    res.send({message:'vendor is not found'})
    return;
}  
res.send({message:'update success'})

}).catch((err)=>{
res.send({message:'you have error',error:err})


})
}





