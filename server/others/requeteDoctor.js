const bcrypt = require("bcrypt");
const data = require("../data/database");
const { Sequelize } = require('../models');
const Doctor = require('../models/doctors');
const { getPseudo } = require("../public/javascripts/generepseudo");
const doctors = Doctor(data,Sequelize);





const dataDoctor = class{

    static InsertionDoctor=  (into)=>{
         let pseudo = getPseudo()
          console.log(pseudo);
            console.log('innnto',into);
        // return   users.sync().then(()=>{
            let{nom,prenom,email,numero,specialite,centre}=into;
            let password = bcrypt.hashSync(into.password, 10);
            return new Promise(async (next)=>{
                doctors.create({nom,prenom,email,numero,specialite,pseudo,password,centre})
                .then(resultat=>{
                    console.log('ss',resultat);
                    next({success:resultat})
                }).catch(err=>{
                    console.log("eee",err);
                    next ({ erreur:err})
               })
            })
        // }).catch(err=>{
        //     console.log('rrroorr',err);
        // })
      
    }

    static DetailDoctor = (intos)=>{
        console.log("qsdsd",intos);
        
        return new Promise(async (next)=>{
          
            const {Op}=require('sequelize');
            doctors.findAll({
                where:{
                    [Op.or]:[
                        {id:intos},
                        {email:intos}
                    ]
                }
            }).then(resultat => {
                console.log('resultat',resultat);
                next({success:resultat})
            }).catch(error  =>{
                console.log('error',error);
                  next({erreur:error})
            }) 
        })
    }

    static AfficherDortorAll=  ()=>{
        
        return new Promise(async (next)=>{
            doctors.findAll()
            .then(resultat=>{
                console.log('ss',resultat);
                next({success:resultat})
            }).catch(err=>{
                console.log("eee",err);
                next ({erreur:err})
            })
        }) 
    }
}

module.exports = dataDoctor;