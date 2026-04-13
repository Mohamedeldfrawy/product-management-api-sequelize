import express from 'express'
 export const routesProduct=express.Router()




 import{

createProducts,
getAllProducts,
getProductsById,
deleteProducts,
updateProducts,
getProductVendorById,
getProductsByVendorId,
getProductsByCategoryId


 }
 
 from '../Product/controllers.js'


 routesProduct.post('/products',createProducts)


 routesProduct.get('/products',getAllProducts)

   routesProduct.get('/products/vendor',getProductsByVendorId)



  routesProduct.get('/products/category',getProductsByCategoryId)

 routesProduct.get('/products/:id',getProductsById)



 routesProduct.delete('/products/:id',deleteProducts)

 routesProduct.put('/products/:id',updateProducts)





  routesProduct.get('/product/:id',getProductVendorById)














