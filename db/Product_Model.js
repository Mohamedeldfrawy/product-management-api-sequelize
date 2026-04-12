 import { DataTypes } from 'sequelize'
import {sequelize} from './db.connect.js'
import { vendor } from './Vendor_Model.js'
import { category } from './Category_Model.js'

 export const product= sequelize.define(

'product' ,{

name :{

type:DataTypes.STRING,



},
price :{
type:DataTypes.INTEGER,

},

stock :{
type:DataTypes.INTEGER,

},


} ,

)
vendor.hasMany(product,{
 onDelete: 'CASCADE',
 onUpdate: 'CASCADE',
foreignKey:{

    allowNull:false
}
})
product.belongsTo(vendor)

category.hasMany(product,{

 onDelete: 'CASCADE',
 onUpdate: 'CASCADE',
 foreignKey:{

    allowNull:false
}
})
product.belongsTo(category)
