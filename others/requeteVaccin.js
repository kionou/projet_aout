const data = require("../data/database");
const jsonwt = require("../middleware/jsonwebtoken");
const { Sequelize } = require('../models');
const Vaccin = require('../models/vaccins');
const vaccins = Vaccin(data,Sequelize);



const dataVaccin = class{

    static InsertionVaccin =  (into)=>{
      
            console.log('innnto',into);
            let id_user = jsonwt.VerifierToken(into.id_user).id
            let id_doctor = jsonwt.VerifierToken(into.id_doctor).id
        
        // return   users.sync().then(()=>{
            let{nom,nom_maladie}=into;
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

    static DetailVaccinUseIdr=  (into)=>{
        console.log('innnto',into);
        return new Promise(async (next)=>{
            vaccins.findAll({where:{id_user:into}})
            .then(resultat=>{
                console.log('ss',resultat);
                next({
                success:resultat
                })
            }).catch(err=>{
                console.log("eee",err);
                next ({
                    erreur:err
                })
            })
        })
        
    }

      static AfficherVaccinAll=  ()=>{
        
        return new Promise(async (next)=>{
            vaccins.findAll()
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

module.exports =dataVaccin