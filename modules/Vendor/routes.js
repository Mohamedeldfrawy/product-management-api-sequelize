import express from 'express'
 export const routes=express.Router()



 import {

createVendor,
getAllVendors,
getVendorById,
deleteVendor,
updateVendor,
getVendorsByEmail,
getVendorsByProducts,


 }from '../Vendor/controllers.js'


routes.post('/vendors',createVendor)



routes.get('/vendors',getAllVendors)



routes.get('/vendor',getVendorsByEmail)

 

 routes.get('/vendors/products', getVendorsByProducts)



  routes.get('/vendors/:id', getVendorById)


  routes.delete('/vendors/:id',deleteVendor)


  routes.put('/vendors/:id',updateVendor)




