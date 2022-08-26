const { request ,response } = require("express");

const MaladieControllers = class{
    static PostMaladie = async (req=request,res=response)=>{
        console.log('req.body',req.body);
    }

}



module.exports= MaladieControllers;