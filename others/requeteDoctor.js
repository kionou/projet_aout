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


        static DetailDoctorEmail=  (into)=>{
        console.log('innnto',into);
        return new Promise(async (next)=>{
            doctors.findAll({where:{email:into}})
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

    static DetailDoctorId=  (into)=>{
        console.log('innnto',into);
        return new Promise(async (next)=>{
            doctors.findAll({where:{id:into}})
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

    static DetailDoctorPseudo=  (into)=>{
        console.log('innnto',into);
        return new Promise(async (next)=>{
            doctors.findAll({where:{pseudo:into}})
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

    static UpdateDoctor=  (into)=>{
        let{id,nom,prenom,email,numero,specialite,centre}=into; 
            return new Promise(async (next)=>{
                doctors.update({nom,prenom,email,numero,specialite,centre},
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

    static DeleteDoctor= (into)=>{
        
        return new Promise(async (next)=>{
            doctors.destroy({where:{id:into}})
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

module.exports = dataDoctor;