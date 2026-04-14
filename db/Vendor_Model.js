 import { DataTypes } from 'sequelize'
import {sequelize} from './db.connect.js'


 export const vendor= sequelize.define(

'Vendor' ,{

name :{

type:DataTypes.STRING,
allowNull:false



},
email :{
type:DataTypes.STRING,
unique:true

},

phone :{
type:DataTypes.STRING,

},
address :{
type:DataTypes.STRING,

}


} ,


)
