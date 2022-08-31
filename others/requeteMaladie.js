const data = require("../data/database");
const { Sequelize } = require('../models');
const maladie = require('../models/maladies');
const maladies = maladie(data,Sequelize);

const dataMaladie = class{


    static InsertionMaladie=  (into)=>{
        console.log('innnto',into);
        // return   users.sync().then(()=>{
            let{ nom_maladie,nom_vaccin,description}=into;
           
            return new Promise(async (next)=>{
                maladies.create({nom_maladie,nom_vaccin,description})
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

    static AfficherMaladie= async ()=>{
        return new Promise(async (next)=>{
            maladies.findAll()
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
    static AfficherMaladieDetail= async (into)=>{
        return new Promise(async (next)=>{
            maladies.findAll({where:{id:into}})
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

    static UpdateMaladie=  (into)=>{
        let{id, nom_maladie,nom_vaccin,description}=into; 
            return new Promise(async (next)=>{
                maladies.update({ nom_maladie,nom_vaccin,description},
                    {where :{id}})
                .then(resultat => {
                    console.log('resultat',resultat);
                    next({success:resultat})
                }).catch(error  =>{
                    console.log('errorsansimage',error);
                    next({erreur:error})
                })
            })
    }

    static DeleteMaladie= (into)=>{
        
            return new Promise(async (next)=>{
                maladies.destroy({where:{id:into}})
                .then(resultat => {
                    console.log('resultat',resultat);
                    next({success:resultat})
                }).catch(error  =>{
                    console.log('errorsansimage',error);
                    next({erreur:error})
                })
            })
    }

}



module.exports = dataMaladie