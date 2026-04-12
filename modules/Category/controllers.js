  import { category } from '../../db/Category_Model.js'
  import { product } from '../../db/Product_Model.js'

   const createCategory=async(req,res)=>{
  
    await category.create(req.body).then((data)=>{
  
    res.send({message:'success',data:data})
    }).catch((err)=>{
  
  res.send({message:'The category already exists',err:err})
  
    })
  
  
  
  
   }
  
  
  
  
   
   const getAllCategories= async(req,res)=>{
  
    await category.findAll().then((data)=>{
  
  if (data.length == 0){
      res.send({message:'category is not found'})
  return;
  }
    res.send({message:'success',data:data})
    }).catch((err)=>{
  
  res.send({message:'you have error',err:err})
  
    })
  
   }
  
  
  
  
   const getCategoryByProducts= async(req,res)=>{
    await category.findAll({
  
  include: [{
  
      model :product
  }]
    }).then((data)=>{
  
  if (data.length == 0){
      res.send({message:'category is not found'})
  return;
  }
    res.send({message:'success',data:data})
    }).catch((err)=>{
  
  res.send({message:'you have error',err:err})
  
    })
  
  
   }
  
  
  
  
   const  deleteCategory= async(req,res)=>{
  
    await category.destroy({
  
  where:{
  id: req.params.id
  
  },
  
  
  
  }).then((data)=>{
  if (data==0){
      res.send({message:'category is not found'})
  }  
  res.send("deleted success")
  
  }).catch((err)=>{
  res.send({message:'you have error',error:err})
  
  
  })
  }
  
  
  
   const updateCategory = async(req,res)=>{
  
    await category.update(req.body,{
  
  where:{
  id: req.params.id
  
  },
  
  
  }).then((data)=>{
  if (data[0]==0){
      res.send({message:'category is not found'})
      return;
  }  
  res.send("update success")
  
  }).catch((err)=>{
  res.send({message:'you have error',error:err})
  
  
  })
  }
  



 export{

createCategory,
getAllCategories,
deleteCategory,
updateCategory,
getCategoryByProducts


 }
