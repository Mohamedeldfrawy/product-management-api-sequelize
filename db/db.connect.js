// import { Sequelize}  from 'sequelize'
// const sequelize = new Sequelize ('orm_sequelize','root','',{

// host:'localhost',
// dialect:'mysql'
// })

// export{
// sequelize
// }





import { Sequelize}  from 'sequelize'
const sequelize = new Sequelize ('sequelize','root','',{

host:'localhost',
dialect:'mysql'
})

export{
sequelize
}


// import { Sequelize } from 'sequelize';

// const sequelize = new Sequelize(
//   'mysql://ufihg2wigko9pdsd:yhNDaEEIMVVRIwKtQab7@beeyxkun52fbuf4mmjtx-mysql.services.clever-cloud.com:3306/beeyxkun52fbuf4mmjtx',
//   {
//     dialect: 'mysql',
//     logging: false,

//     dialectOptions: {
//       ssl: {
//         require: true,
//         rejectUnauthorized: false,
//       },
//     },
//   }
// );

// export { sequelize };
