const { request ,response } = require("express");
const jsonwt = require("../middleware/jsonwebtoken");
const { mailer } = require('../middleware/nodemailer');
const dataUser = require("../others/requeteUser");
const bcrypt  = require('bcrypt');



const UserControler = class{
    static PostUser = async (req=request,res=response)=>{
        
        let user = await dataUser.DetailUser(req.body.email)
            if (user.success == "") {
            let users = await dataUser.InsertionUser(req.body);
            res.send({"user":users.success}) 
                
            }else{
                res.send({"alert":"Email existe déjà "})

            }
    }

    static ConnexionUser = async(req=request,res=response)=>{

        let user= await dataUser.DetailUser(req.body.email)

        if (user.success == '') {
            res.send({"alert":"Email ou le Mot de passe est incorrect !"})
        }else{
             let hash=user.success[0].password;
           
            let password = req.body.password;
            let passwordUser = bcrypt.compareSync(password,hash);
            if (passwordUser) {
                // console.log("suuu",user.success[0].dataValues)
              let Token = jsonwt.CreerToken(user.success[0].dataValues)
                res.send({"data": Token})
                
            } else {
            res.send({alert:'Mot de passe incorrect'})
            }
        }

    }


    static ConnexionToken = async(req=request,res=response)=>{
       
            let id = req.params.id;
            console.log('fsfsd',id);
            let tokenId = jsonwt.VerifierToken(id)   
            let users = await dataUser.InsertionUser(tokenId);
            if (users.success) {
                
                res.send({user:users.success})
            } else {
                res.send(users.erreur)
            }
    }

    static AfficheDetailUserId = async(req=request,res=response)=>{
       let token = req.headers.patient
       let verifier = jsonwt.VerifierToken(token)
        console.log('yhunkgbb',verifier);
         let user = await dataUser.DetailUserId(verifier.id)
        res.send({"user":user.success}) 
    }

    static AfficherUserAll = async(req=request,res=response)=>{
       
         let user = await dataUser.AfficherUserAll()
         console.log('user',user.success);
         res.json(user.success)
    }

    static UpdateUser = async(req=request,res=response)=>{
       console.log(req.body);
        
        //  let user = await dataUser.UpdateUser(req.body)
        //  console.log('user',user.success);
        //  res.json(user.success)
    }

    static DeleteUser = async(req=request,res=response)=>{
       
        console.log('yhunkgbb',req.params.id);
         let user = await dataUser.DeleteUser(req.params.id)
         console.log('user',user.success);
         res.json(user.success)
    }





    static GetUser = async(req=request,res=response)=>{
        let message = await dataUser.AfficherUser()
    //    const message = [
    //     {id:1,"nom":"kionou","prenom":"mamadou","email":"kionoumohaam.0@gmail.com"},
    //     {id:2,"nom":"konate","prenom":"mohamed","email":"kionoumamadou.0@gmail.com"}
    //    ]
       res.send(message)

    }
}

module.exports= UserControler;