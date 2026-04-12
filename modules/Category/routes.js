import express from 'express'
 export const routesCategory=express.Router()
 

  

 import{

createCategory,
getAllCategories,
deleteCategory,
updateCategory,
getCategoryByProducts


 } from '../Category/controllers.js'

  routesCategory.post('/categories',createCategory)



 
  routesCategory.get('/categories',getAllCategories)




 routesCategory.get('/categories/products',getCategoryByProducts)




 routesCategory.delete('/categories/:id',deleteCategory)



 routesCategory.put('/categories/:id',updateCategory)




