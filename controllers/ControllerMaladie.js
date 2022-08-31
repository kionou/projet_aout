const { request ,response } = require("express");
const dataMaladie = require("../others/requeteMaladie");


const MaladieControllers = class{

    static PostMaladie = async (req=request,res=response)=>{
        console.log('req.body',req.body);
        let maladie = await dataMaladie.InsertionMaladie(req.body)
        console.log('mama',maladie.success);
    }

    static GetMaladie = async (req=request,res=response)=>{
        if (req.headers.patient) {
            let maladie = await dataMaladie.AfficherMaladie()
            console.log('mama',maladie.success);
            res.send({"maladie":maladie.success})  
        }
      
    }
    static GetMaladieDetail = async (req=request,res=response)=>{
       
        let maladie = await dataMaladie.AfficherMaladieDetail(req.params.id)
        console.log('mama',maladie.success);
        res.send({"maladie":maladie.success})  
    }

    static UpdateMaladie = async (req=request,res=response)=>{
       
        let maladie = await dataMaladie.UpdateMaladie(req.body)
        console.log('mama',maladie.success);
        res.json(maladie.success)
    }

    static DeleteMaladie= async (req=request,res=response)=>{
       console.log('bonjours');
        let maladie = await dataMaladie.DeleteMaladie(req.params.id)
        console.log('mama',maladie.success);
        res.json(maladie.success)
    }

     
    
       
}



module.exports= MaladieControllers;