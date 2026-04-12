 import { DataTypes } from 'sequelize'
import {sequelize} from './db.connect.js'


 export const category= sequelize.define(

'Category' ,{

name :{

type:DataTypes.STRING,
allowNull:false,
unique:true



},
description :{
type:DataTypes.TEXT,

},


} ,


)
