import express from 'express'
const app = express()
const port = process.env.PORT || 3000
app.use(express.json())

import {sequelize} from './db/db.connect.js'




 sequelize.authenticate ().then(()=>{

 console.log('Connection has been established successfully.');


 }).catch((error)=>{

   console.error('Unable to connect to the database:',error);


 })






import { routes } from './modules/Vendor/routes.js'
import { routesProduct } from './modules/product/routes.js'
import {routesCategory} from './modules/Category/routes.js'

app.use('/',routes)
app.use('/',routesProduct)
app.use('/',routesCategory)


app.listen(port, () => console.log(`Example app listening on port ${port}!`))

 
sequelize.sync({alter:true})






