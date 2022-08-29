const { request ,response } = require("express");
const dataDoctor = require("../others/requeteDoctor");
const bcrypt  = require('bcrypt');
const jsonwt = require("../middleware/jsonwebtoken");



const DoctorControllers = class{

    static PostDocteur = async (req=request,res=response)=>{
        console.log('req.body',req.body);
        let doctor = await dataDoctor.DetailDoctorEmail(req.body.email)
        if (doctor.success == "") {
            let doctors = await dataDoctor.InsertionDoctor(req.body)
             res.json(doctors.success)

            
        }else{
            res.json({"alert":"Email existe déjà "})

        }
      
    }

    static AfficheDoctorAll = async (req=request,res=response)=>{
       
        let doctor = await dataDoctor.AfficherDortorAll()
        console.log('mama',doctor.success);
        res.json(doctor.success)
    }

    static ConnexionDoctor = async(req=request,res=response)=>{
        console.log(req.body);
        let doctor= await dataDoctor.DetailDoctorPseudo(req.body.pseudo)
        
        if (doctor.success == '') {
            res.send({"alert":"Pseudo ou le Mot de passe est incorrect !"})
        }else{
             let hash=doctor.success[0].password;
           
            let password = req.body.password;
            let passwordUser = bcrypt.compareSync(password,hash);
            if (passwordUser) {
                console.log("qfqsfSFQ",doctor.success[0].dataValues);
              let token = jsonwt.CreerToken(doctor.success[0].dataValues)
                res.send({"data": token})
                
            } else {
            res.send({alert:'Mot de passe incorrect'})
            }
        }

    }

    static AfficheDetailDoctor = async (req=request,res=response)=>{
       
        let doctor = await dataDoctor.DetailDoctorId(req.params.id)
        console.log('mama',doctor.success);
        res.json(doctor.success)
    }

     static UpdateDoctor = async(req=request,res=response)=>{
       
         let doctor = await dataDoctor.UpdateDoctor(req.body)
         console.log('user',doctor.success);
         res.json(doctor.success)
    }

    static DeleteDoctor = async(req=request,res=response)=>{
       
        console.log('yhunkgbb',req.params.id);
         let doctor = await dataDoctor.DeleteDoctor(req.params.id)
         console.log('user',doctor.success);
         res.json(doctor.success)
    }
}


module.exports= DoctorControllers;