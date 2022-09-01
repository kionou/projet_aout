
const  Sequelize  = require("sequelize")

// let sequelize = new Sequelize("sante_aout","postgres","nan2021",{
//     dialect:'postgres',
//     host:'localhost',
//     port: 5432
// })

// let sequelize = new Sequelize("sante_aout","postgres","Laloi2015",{
//     dialect:'postgres',
//     host:'localhost',
//     port:'5432'
// })


let sequelize = new Sequelize(process.env.DATABASE_URL,{
    dialect:'postgres',
    protocol: 'postgres',
     dialectOptions: {
         ssl: {
             require: true,
             rejectUnauthorized: false
         }
     }
    // host:'localhost',
    // port:'5432'
})



module.exports=sequelize;