const { request ,response } = require("express");
const dataDoctor = require("../others/requeteDoctor");


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