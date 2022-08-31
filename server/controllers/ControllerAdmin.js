const { request ,response } = require("express");
const dataDoctor = require("../others/requeteDoctor");
const dataVaccin = require("../others/requeteVaccin");
const dataMaladie = require("../others/requeteMaladie");
const dataUser = require("../others/requeteUser");



const AdminControllers = class{

    static AfficheAll = async (req=request,res=response)=>{
        
        let doctor = await dataDoctor.AfficherDortorAll()
        let patient = await dataUser.AfficherUserAll()
        let maladie = await dataMaladie.AfficherMaladie()
        let vaccin = await dataVaccin.AfficherVaccinAll()
        console.log('patienttt',patient.success);
        res.render('index',{doctor:doctor.success,patient:patient.success,maladie:maladie.success,vaccin:vaccin.success})
      
    }
}
module.exports=AdminControllers