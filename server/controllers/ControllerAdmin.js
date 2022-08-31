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

    static Edit = async (req=request,res=response)=>{
        
        let id = req.params.id
        let patient = await dataUser.DetailUserId(id)
        res.render('updatePatient',{patient:patient.success})
      
    }

    static UpdatePatient = async (req=request,res=response)=>{
        
    console.log(req.body);
    let updatePatient = await dataUser.UpdateUser(req.body)
    if (updatePatient.success) {
        res.redirect('/')
        
    } 
   
      
    }

    static InsertDoctor = async (req=request,res=response)=>{
        
       res.render('createDoctor')
       
          
    }


    static InsertDoctorPost = async (req=request,res=response)=>{
        let doctor = await dataDoctor.InsertionDoctor(req.body)
        
        if (doctor.success) {
            res.json(doctor.success)
            
        }
        
           
     }
}
module.exports=AdminControllers