const { request ,response } = require("express");
const jsonwt = require("../middleware/jsonwebtoken");
const { mailer } = require('../middleware/nodemailer');



const UserControler = class{
    static PostUser = (req=request,res=response)=>{
        console.log('bonjours',req.body);
         let Token =   jsonwt.CreerToken(req.body)
        mailer(req.body.email,Token)

    }
    static GetUser = (req=request,res=response)=>{
       const message = [
        {id:1,"nom":"kionou","prenom":"mamadou","email":"kionoumohaam.0@gmail.com"},
        {id:2,"nom":"konate","prenom":"mohamed","email":"kionoumamadou.0@gmail.com"}
       ]
       res.send(message)

    }

      static ConnexionToken = async(req=request,res=response)=>{
       
            let id = req.params.id;
            let tokenId = jsonwt.VerifierToken(id)   
            // let users = await dataUser.InsertionUser(tokenId);
            // if (users.success) {
            //     console.log(users.success);
            //     res.json({user:users.success})
            // } else {
            //     res.send(users.erreur)
            // }
    }
}

module.exports= UserControler;