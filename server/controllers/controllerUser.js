const { request ,response } = require("express");

const UserControler = class{
    static PostUser = (req=request,res=response)=>{
        console.log('bonjours',req.body);

    }
    static GetUser = (req=request,res=response)=>{
       const message = [{"user":"fqslf","qsfkjhf":"kljfblvj"}]
       res.send(message)

    }
}

module.exports= UserControler;