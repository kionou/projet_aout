const data = require("../data/database");
const { Sequelize } = require('../models');
const Vaccin = require('../models/vaccins');
const vaccins = Vaccin(data,Sequelize);


const dataVaccin = class{

    static InsertionVaccin =  (into)=>{
      
            console.log('innnto',into);
        // return   users.sync().then(()=>{
            let{nom,nom_maladie,id_user,id_doctor}=into;
            return new Promise(async (next)=>{
                vaccins.create({nom,nom_maladie,id_user,id_doctor})
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
}

module.exports =dataVaccin