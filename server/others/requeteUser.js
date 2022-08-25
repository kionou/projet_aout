const bcrypt = require("bcrypt");
const data = require("../data/database");
const { Sequelize } = require('../models');
const User = require('../models/users');
const users = User(data,Sequelize);

const dataUser = class{


    static InsertionUser=  (into)=>{
        console.log('innnto',into);
        // return   users.sync().then(()=>{
            let{nom,prenom,email,numero,date_naissance}=into;
            let password = bcrypt.hashSync(into.password, 10);
            return new Promise(async (next)=>{
               users.create({nom,prenom,email,numero,date_naissance,password})
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
        // }).catch(err=>{
        //     console.log('rrroorr',err);
        // })
      
    }

    static DetailUser=  (into)=>{
        console.log('innnto',into);
            return new Promise(async (next)=>{
               users.findAll({where:{email:into}})
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

    static AfficherUser=  ()=>{
        
            return new Promise(async (next)=>{
               users.findAll()
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

}


module.exports = dataUser