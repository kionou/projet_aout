const { request ,response } = require("express");
const dataDoctor = require("../others/requeteDoctor");


const DoctorControllers = class{

    static PostDocteur = async (req=request,res=response)=>{
        console.log('req.body',req.body);
        let doctor = await dataDoctor.DetailDoctor(req.body.email)
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

    static AfficheDetailDoctor = async (req=request,res=response)=>{
       
        let doctor = await dataDoctor.DetailDoctor(req.params.id)
        console.log('mama',doctor.success);
        res.json(doctor.success)
    }
}


module.exports= DoctorControllers;