const { request ,response } = require("express");
const jsonwt = require("../middleware/jsonwebtoken");
const dataDoctor = require("../others/requeteDoctor");
const dataVaccin = require("../others/requeteVaccin");


const VaccinControllers = class{

    static PostVaccin = async (req=request,res=response)=>{
        console.log('req.body',req.body);
        let vaccin = await dataVaccin.InsertionVaccin(req.body)
        res.json({"data":vaccin.success}) 
    }

    static AfficheDetailVaccinUser = async (req=request,res=response)=>{
        let token = req.headers.patient
        let verifier = jsonwt.VerifierToken(token)
        //  console.log('yhunkgbb',verifier);
           let vaccin = await dataVaccin.DetailVaccinUseIdr(verifier.id)
           if (vaccin.success == "") {
               res.send({"alert":"vous n'aviez pas encore effectuez un vaccin pour le moment."})
               
           } else {
            //    console.log("vaccinnnn",vaccin.success[0].id_doctor);
            let doctor = await dataDoctor.DetailDoctorId(vaccin.success[0].id_doctor)
           //    console.log("vaccinnnn",doctor.success);
           res.send({"vaccin":vaccin.success,"doctor":doctor.success}) 
           }
 

          
    }
}


module.exports = VaccinControllers;