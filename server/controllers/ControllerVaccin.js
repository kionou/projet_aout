const { request ,response } = require("express");
const dataVaccin = require("../others/requeteVaccin");


const VaccinControllers = class{

    static PostVaccin = async (req=request,res=response)=>{
        console.log('req.body',req.body);
        let vaccin = await dataVaccin.InsertionVaccin(req.body)
        res.json(vaccin.success) 
    }
}


module.exports = VaccinControllers;